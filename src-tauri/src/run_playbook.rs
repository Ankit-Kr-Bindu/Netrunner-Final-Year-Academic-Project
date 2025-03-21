use serde::{Deserialize, Serialize};
use std::process::Command;
use crate::inventory::{Host, Group};
use crate::fetch_inventory::GroupWithHosts;
use rusqlite::{params, Connection, Result};

#[derive(Debug, Serialize, Deserialize)]
pub struct RunPlaybookParams {
    pub playbook: String,
    pub hosts: Vec<i32>,
    pub groups: Vec<i32>,
}

#[tauri::command]
pub fn run_ansible_playbook(params: RunPlaybookParams) -> Result<String, String> {
    // Construct the inventory file content
    let mut inventory = String::new();

    // Add hosts to the inventory
    for host_id in params.hosts {
        // Fetch host details from the database
        let host = get_host_by_id(host_id).map_err(|e| e.to_string())?;
        inventory.push_str(&format!("{} ansible_host={}\n", host.name, host.ip_address.unwrap_or_default()));
    }

    // Add groups to the inventory
    for group_id in params.groups {
        // Fetch group details from the database
        let group = get_group_by_id(group_id).map_err(|e| e.to_string())?;
        inventory.push_str(&format!("[{}]\n", group.name));
        for host in group.hosts {
            inventory.push_str(&format!("{} ansible_host={}\n", host.name, host.ip_address.unwrap_or_default()));
        }
    }

    // Write the inventory to a temporary file
    let inventory_path = "/tmp/inventory.ini";
    std::fs::write(inventory_path, inventory).map_err(|e| e.to_string())?;

    // Run the Ansible playbook
    let output = Command::new("ansible-playbook")
        .arg("-i")
        .arg(inventory_path)
        .arg(&params.playbook)
        .output()
        .map_err(|e| e.to_string())?;

    if output.status.success() {
        Ok(String::from_utf8_lossy(&output.stdout).to_string())
    } else {
        Err(String::from_utf8_lossy(&output.stderr).to_string())
    }
}

// Fetch host details from the database
fn get_host_by_id(id: i32) -> Result<Host, rusqlite::Error> {
    let conn = Connection::open("inventory.db")?;
    let mut stmt = conn.prepare("SELECT id, name, ip_address FROM hosts WHERE id = ?1")?;
    stmt.query_row(params![id], |row| {
        Ok(Host {
            id: row.get(0)?,
            name: row.get(1)?,
            ip_address: row.get(2)?,
        })
    })
}

// Fetch group details from the database
fn get_group_by_id(id: i32) -> Result<GroupWithHosts, rusqlite::Error> {
    let conn = Connection::open("inventory.db")?;
    let mut stmt = conn.prepare("SELECT id, name FROM groups WHERE id = ?1")?;
    let group = stmt.query_row(params![id], |row| {
        Ok(GroupWithHosts {
            id: row.get(0)?,
            name: row.get(1)?,
            hosts: Vec::new(), // Initialize with an empty vector
        })
    })?;

    // Fetch hosts for the group
    let mut stmt = conn.prepare(
        "SELECT h.id, h.name, h.ip_address
         FROM hosts h
         JOIN group_host gh ON h.id = gh.host_id
         WHERE gh.group_id = ?1",
    )?;
    let hosts = stmt.query_map(params![group.id], |row| {
        Ok(Host {
            id: row.get(0)?,
            name: row.get(1)?,
            ip_address: row.get(2)?,
        })
    })?
    .collect::<Result<Vec<Host>, _>>()?;

    Ok(GroupWithHosts {
        id: group.id,
        name: group.name,
        hosts,
    })
}