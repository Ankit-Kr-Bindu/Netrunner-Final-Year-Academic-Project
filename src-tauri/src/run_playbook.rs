use serde::{Deserialize, Serialize};
use serde_yaml::to_string;
use std::process::Command;
use std::path::Path;
use crate::inventory::Host;
use crate::fetch_inventory::GroupWithHosts;
use rusqlite::{params, Connection, Result};
use tauri::Manager;

#[derive(Debug, Serialize, Deserialize)]
pub struct RunPlaybookParams {
    pub playbook: String,  // Full path to the playbook
    pub hosts: Vec<i32>,
    pub groups: Vec<i32>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CommandResponse {
    pub success: bool,
    pub message: String,
    pub output: Option<String>,
}

#[tauri::command]
pub fn run_ansible_playbook(params: RunPlaybookParams) -> Result<CommandResponse, String> {
    // Verify playbook exists
    let playbook_path = Path::new(&params.playbook);
    if !playbook_path.exists() {
        return Ok(CommandResponse {
            success: false,
            message: format!("Playbook not found at: {}", playbook_path.display()),
            output: None,
        });
    }

    // Construct inventory in YAML format
    let mut inventory = serde_yaml::Mapping::new();

    // Add hosts
    let mut hosts_mapping = serde_yaml::Mapping::new();
    for host_id in params.hosts {
        let host = get_host_by_id(host_id).map_err(|e| e.to_string())?;
        let mut host_details = serde_yaml::Mapping::new();
        host_details.insert(
            serde_yaml::Value::String("ansible_host".to_string()),
            serde_yaml::Value::String(host.ip_address.map_or(String::new(), |s| s)),
        );
        host_details.insert(
            serde_yaml::Value::String("ansible_user".to_string()),
            serde_yaml::Value::String(host.username.map_or(String::new(), |s| s)),
        );
        host_details.insert(
            serde_yaml::Value::String("ansible_ssh_pass".to_string()),
            serde_yaml::Value::String(host.password.map_or(String::new(), |s| s)),
        );
        host_details.insert(
            serde_yaml::Value::String("ansible_connection".to_string()),
            serde_yaml::Value::String("network_cli".to_string()),
        );
        host_details.insert(
            serde_yaml::Value::String("ansible_network_os".to_string()),
            serde_yaml::Value::String("ios".to_string()),
        );
        host_details.insert(
            serde_yaml::Value::String("ansible_ssh_common_args".to_string()),
            serde_yaml::Value::String("-oKexAlgorithms=diffie-hellman-group1-sha1,diffie-hellman-group14-sha1 -oHostKeyAlgorithms=ssh-rsa -oMACs=hmac-sha1,hmac-sha1-96".to_string()),
        );
        hosts_mapping.insert(serde_yaml::Value::String(host.name), serde_yaml::Value::Mapping(host_details));
    }

    // Add groups
    let mut groups_mapping = serde_yaml::Mapping::new();
    for group_id in params.groups {
        let group = get_group_by_id(group_id).map_err(|e| e.to_string())?;
        let mut group_hosts = serde_yaml::Mapping::new();
        for host in group.hosts {
            group_hosts.insert(serde_yaml::Value::String(host.name), serde_yaml::Value::Null);
        }
        groups_mapping.insert(serde_yaml::Value::String(group.name), serde_yaml::Value::Mapping(group_hosts));
    }

    // Combine hosts and groups into the "all" key
    let mut all_mapping = serde_yaml::Mapping::new();
    all_mapping.insert(serde_yaml::Value::String("hosts".to_string()), serde_yaml::Value::Mapping(hosts_mapping));
    all_mapping.insert(serde_yaml::Value::String("children".to_string()), serde_yaml::Value::Mapping(groups_mapping));
    inventory.insert(serde_yaml::Value::String("all".to_string()), serde_yaml::Value::Mapping(all_mapping));

    // Write inventory to a YAML file
    let inventory_path = "./inventory.yml";
    let inventory_yaml = to_string(&inventory).map_err(|e| e.to_string())?;
    std::fs::write(inventory_path, inventory_yaml).map_err(|e| e.to_string())?;

    // Execute playbook
    let output = Command::new("ansible-playbook")
        .arg("-i")
        .arg(inventory_path)
        .arg(playbook_path)
        .output()
        .map_err(|e| e.to_string())?;

    if output.status.success() {
        Ok(CommandResponse {
            success: true,
            message: "Playbook executed successfully".to_string(),
            output: Some(String::from_utf8_lossy(&output.stdout).to_string()),
        })
    } else {
        Ok(CommandResponse {
            success: false,
            message: "Playbook execution failed".to_string(),
            output: Some(String::from_utf8_lossy(&output.stderr).to_string()),
        })
    }
}

#[tauri::command]
pub fn get_playbook_path(playbook_name: String, app: tauri::AppHandle) -> Result<String, String> {
    let path = app.path().app_local_data_dir()
        .map_or_else(|_| Err("Could not find app directory".to_string()), |dir| Ok(dir))?
        .join("ansible-playbooks")
        .join(playbook_name);
    
    if path.exists() {
        Ok(path.to_string_lossy().into_owned())
    } else {
        Err(format!("Playbook not found at: {}", path.display()))
    }
}

#[tauri::command]
pub fn list_playbooks(app: tauri::AppHandle) -> Result<Vec<String>, String> {
    let resource_path = app.path().app_local_data_dir()
        .map_or_else(|_| Err("Could not find app directory".to_string()), |dir| Ok(dir))?
        .join("ansible-playbooks");
    
    println!("Looking for playbooks in: {}", resource_path.display());
    
    let mut playbooks = Vec::new();
    if let Ok(entries) = std::fs::read_dir(resource_path) {
        for entry in entries.flatten() {
            if let Some(name) = entry.path().file_name() {
                let path = entry.path();
                println!("Found file: {}", path.display());
                if let Some(ext) = path.extension() {
                    if let Some(ext_str) = ext.to_str() {
                        if ext_str == "yml" || ext_str == "yaml" {
                            playbooks.push(name.to_string_lossy().into_owned());
                            println!("Added playbook: {}", name.to_string_lossy());
                        }
                    }
                }
            }
        }
    }
    println!("Total playbooks found: {}", playbooks.len());
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