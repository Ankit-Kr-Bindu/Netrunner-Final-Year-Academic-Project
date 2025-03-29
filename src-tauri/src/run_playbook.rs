use serde::{Deserialize, Serialize};
use std::process::Command;
use std::path::{Path, PathBuf};
use tauri::api::path::resource_dir;
use crate::inventory::Host;
use crate::fetch_inventory::GroupWithHosts;
use rusqlite::{params, Connection, Result};

#[derive(Debug, Serialize, Deserialize)]
pub struct RunPlaybookParams {
    pub playbook: String,  // Full path to the playbook
    pub hosts: Vec<i32>,
    pub groups: Vec<i32>,
}

#[tauri::command]
pub fn run_ansible_playbook(params: RunPlaybookParams) -> Result<String, String> {
    // Verify playbook exists
    let playbook_path = Path::new(&params.playbook);
    if !playbook_path.exists() {
        return Err(format!("Playbook not found at: {}", playbook_path.display()));
    }

    // Construct inventory
    let mut inventory = String::new();

    // Add hosts
    for host_id in params.hosts {
        let host = get_host_by_id(host_id).map_err(|e| e.to_string())?;
        inventory.push_str(&format!(
            "{} ansible_host={} ansible_user={} ansible_ssh_pass={}\n",
            host.name,
            host.ip_address.unwrap_or_default(),
            host.username.unwrap_or_default(),
            host.password.unwrap_or_default()
        ));
    }

    // Add groups
    for group_id in params.groups {
        let group = get_group_by_id(group_id).map_err(|e| e.to_string())?;
        inventory.push_str(&format!("[{}]\n", group.name));
        for host in group.hosts {
            inventory.push_str(&format!(
                "{} ansible_host={} ansible_user={} ansible_ssh_pass={}\n",
                host.name,
                host.ip_address.unwrap_or_default(),
                host.username.unwrap_or_default(),
                host.password.unwrap_or_default()
            ));
        }
    }

    // Write temporary inventory
    let inventory_path = "/tmp/inventory.ini";
    std::fs::write(inventory_path, inventory).map_err(|e| e.to_string())?;

    // Execute playbook
    let output = Command::new("ansible-playbook")
        .arg("-i")
        .arg(inventory_path)
        .arg(playbook_path)
        .output()
        .map_err(|e| e.to_string())?;

    if output.status.success() {
        Ok(String::from_utf8_lossy(&output.stdout).to_string())
    } else {
        Err(String::from_utf8_lossy(&output.stderr).to_string())
    }
}

#[tauri::command]
fn get_playbook_path(playbook_name: String) -> Result<String, String> {
    let mut path = std::env::current_dir()
        .map_err(|e| e.to_string())?
        .join("src-tauri")
        .join("playbooks")
        .join(playbook_name);
    
    if path.exists() {
        Ok(path.to_string_lossy().into_owned())
    } else {
        Err(format!("Playbook not found at: {}", path.display()))
    }
}

#[tauri::command]
fn list_playbooks() -> Result<Vec<String>, String> {
    let mut path = std::env::current_dir()
        .map_err(|e| e.to_string())?
        .join("src-tauri")
        .join("playbooks");
    
    let mut playbooks = Vec::new();
    if let Ok(entries) = std::fs::read_dir(path) {
        for entry in entries.flatten() {
            if let Some(name) = entry.path().file_name() {
                let ext = entry.path().extension()
                    .and_then(|s| s.to_str())
                    .unwrap_or("");
                if ext == "yml" || ext == "yaml" {
                    playbooks.push(name.to_string_lossy().into_owned());
                }
            }
        }
    }
    Ok(playbooks)
}

// Database functions remain unchanged
fn get_host_by_id(id: i32) -> Result<Host, rusqlite::Error> {
    let conn = Connection::open("inventory.db")?;
    let mut stmt = conn.prepare("SELECT id, name, ip_address, username, password FROM hosts WHERE id = ?1")?;
    stmt.query_row(params![id], |row| {
        Ok(Host {
            id: row.get(0)?,
            name: row.get(1)?,
            ip_address: row.get(2)?,
            username: row.get(3)?,
            password: row.get(4)?,
        })
    })
}

fn get_group_by_id(id: i32) -> Result<GroupWithHosts, rusqlite::Error> {
    let conn = Connection::open("inventory.db")?;
    let mut stmt = conn.prepare("SELECT id, name FROM groups WHERE id = ?1")?;
    let group = stmt.query_row(params![id], |row| {
        Ok(GroupWithHosts {
            id: row.get(0)?,
            name: row.get(1)?,
            hosts: Vec::new(),
        })
    })?;

    let mut stmt = conn.prepare(
        "SELECT h.id, h.name, h.ip_address, h.username, h.password
         FROM hosts h
         JOIN group_host gh ON h.id = gh.host_id
         WHERE gh.group_id = ?1",
    )?;
    let hosts = stmt.query_map(params![group.id], |row| {
        Ok(Host {
            id: row.get(0)?,
            name: row.get(1)?,
            ip_address: row.get(2)?,
            username: row.get(3)?,
            password: row.get(4)?,
        })
    })?
    .collect::<Result<Vec<Host>, _>>()?;

    Ok(GroupWithHosts {
        id: group.id,
        name: group.name,
        hosts,
    })
}