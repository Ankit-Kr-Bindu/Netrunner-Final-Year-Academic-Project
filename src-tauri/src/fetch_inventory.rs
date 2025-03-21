use rusqlite::{params, Connection};
use serde::{Deserialize, Serialize};
use crate::inventory::{Host, Group};

#[derive(Debug, Serialize, Deserialize)]
pub struct GroupWithHosts {
    pub id: i32,
    pub name: String,
    pub hosts: Vec<Host>,
}

// Get all groups with their hosts from the database
#[tauri::command]
pub fn get_groups_with_hosts() -> Result<Vec<GroupWithHosts>, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;

    // Fetch groups
    let mut stmt = conn
        .prepare("SELECT id, name FROM groups")
        .map_err(|e| e.to_string())?;
    let groups = stmt
        .query_map([], |row| {
            Ok(Group {
                id: row.get(0)?,
                name: row.get(1)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<Group>, _>>()
        .map_err(|e| e.to_string())?;

    // Fetch hosts for each group
    let mut groups_with_hosts = Vec::new();
    for group in groups {
        let mut stmt = conn
            .prepare(
                "SELECT h.id, h.name, h.ip_address
                 FROM hosts h
                 JOIN group_host gh ON h.id = gh.host_id
                 WHERE gh.group_id = ?1",
            )
            .map_err(|e| e.to_string())?;
        let hosts = stmt
            .query_map(params![group.id], |row| {
                Ok(Host {
                    id: row.get(0)?,
                    name: row.get(1)?,
                    ip_address: row.get(2)?,
                })
            })
            .map_err(|e| e.to_string())?
            .collect::<Result<Vec<Host>, _>>()
            .map_err(|e| e.to_string())?;

        groups_with_hosts.push(GroupWithHosts {
            id: group.id,
            name: group.name,
            hosts,
        });
    }

    Ok(groups_with_hosts)
}