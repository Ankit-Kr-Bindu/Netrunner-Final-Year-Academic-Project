use rusqlite::{params, Connection, Result};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Host {
    pub id: i32,
    pub name: String,
    pub ip_address: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Group {
    pub id: i32,
    pub name: String,
}

// Initialize the database and create tables
pub fn create_db() -> Result<()> {
    let conn = Connection::open("inventory.db")?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS hosts (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL UNIQUE,
            ip_address TEXT
        )",
        [],
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS groups (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL UNIQUE
        )",
        [],
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS group_host (
            group_id INTEGER,
            host_id INTEGER,
            FOREIGN KEY(group_id) REFERENCES groups(id),
            FOREIGN KEY(host_id) REFERENCES hosts(id),
            PRIMARY KEY(group_id, host_id)
        )",
        [],
    )?;

    Ok(())
}

// Add a host to the database
#[tauri::command]
pub fn add_host(name: String, ip_address: Option<String>) -> Result<(), String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    conn.execute(
        "INSERT OR IGNORE INTO hosts (name, ip_address) VALUES (?1, ?2)",
        params![name, ip_address],
    )
    .map_err(|e| e.to_string())?;
    Ok(())
}

// Get all hosts from the database
#[tauri::command]
pub fn get_hosts() -> Result<Vec<Host>, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT id, name, ip_address FROM hosts")
        .map_err(|e| e.to_string())?;
    let hosts = stmt
        .query_map([], |row| {
            Ok(Host {
                id: row.get(0)?,
                name: row.get(1)?,
                ip_address: row.get(2)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<Host>, _>>()
        .map_err(|e| e.to_string())?;
    Ok(hosts)
}

// Add a group to the database
#[tauri::command]
pub fn add_group(name: String) -> Result<(), String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    conn.execute("INSERT OR IGNORE INTO groups (name) VALUES (?1)", params![name])
        .map_err(|e| e.to_string())?;
    Ok(())
}

// Get all groups from the database
#[tauri::command]
pub fn get_groups() -> Result<Vec<Group>, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
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
    Ok(groups)
}

// Remove a host from the database
#[tauri::command]
pub fn remove_host(id: i32) -> Result<(), String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    conn.execute("DELETE FROM hosts WHERE id = ?1", params![id])
        .map_err(|e| e.to_string())?;
    Ok(())
}

// Modify a host in the database
#[tauri::command]
pub fn modify_host(id: i32, name: String, ip_address: Option<String>) -> Result<(), String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    conn.execute(
        "UPDATE hosts SET name = ?1, ip_address = ?2 WHERE id = ?3",
        params![name, ip_address, id],
    )
    .map_err(|e| e.to_string())?;
    Ok(())
}

// Remove a group from the database
#[tauri::command]
pub fn remove_group(id: i32) -> Result<(), String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    conn.execute(
        "DELETE FROM group_host WHERE group_id = ?1",
        params![id],
    )
    .map_err(|e| e.to_string())?;

    conn.execute(
        "DELETE FROM groups WHERE id = ?1",
         params![id])
        .map_err(|e| e.to_string())?;
    Ok(())
}

// Modify a group in the database
#[tauri::command]
pub fn modify_group(id: i32, name: String) -> Result<(), String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    conn.execute("UPDATE groups SET name = ?1 WHERE id = ?2", params![name, id])
        .map_err(|e| e.to_string())?;
    Ok(())
}

// Assign a host to a group
#[tauri::command]
pub fn assign_host_to_group(host_name: String, group_name: String) -> Result<(), String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;

    // Get host ID
    let host_id: i32 = conn
        .query_row(
            "SELECT id FROM hosts WHERE name = ?1",
            params![host_name],
            |row| row.get(0),
        )
        .map_err(|e| e.to_string())?;

    // Get group ID
    let group_id: i32 = conn
        .query_row(
            "SELECT id FROM groups WHERE name = ?1",
            params![group_name],
            |row| row.get(0),
        )
        .map_err(|e| e.to_string())?;

    // Assign host to group
    conn.execute(
        "INSERT OR IGNORE INTO group_host (group_id, host_id) VALUES (?1, ?2)",
        params![group_id, host_id],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}

#[tauri::command]
pub fn reassign_host_to_group(host_name: String, old_group_name: String, new_group_name: String) -> Result<(), String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;

    // Get host ID
    let host_id: i32 = conn
        .query_row(
            "SELECT id FROM hosts WHERE name = ?1",
            params![host_name],
            |row| row.get(0),
        )
        .map_err(|e| e.to_string())?;

    // Get old group ID
    let old_group_id: i32 = conn
        .query_row(
            "SELECT id FROM groups WHERE name = ?1",
            params![old_group_name],
            |row| row.get(0),
        )
        .map_err(|e| e.to_string())?;

    // Get new group ID
    let new_group_id: i32 = conn
        .query_row(
            "SELECT id FROM groups WHERE name = ?1",
            params![new_group_name],
            |row| row.get(0),
        )
        .map_err(|e| e.to_string())?;

    // Remove host from old group
    conn.execute(
        "DELETE FROM group_host WHERE group_id = ?1 AND host_id = ?2",
        params![old_group_id, host_id],
    )
    .map_err(|e| e.to_string())?;

    // Assign host to new group
    conn.execute(
        "INSERT OR IGNORE INTO group_host (group_id, host_id) VALUES (?1, ?2)",
        params![new_group_id, host_id],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}

#[tauri::command]
pub fn remove_host_from_group(host_name: String, group_name: String) -> Result<(), String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;

    // Get host ID
    let host_id: i32 = conn
        .query_row(
            "SELECT id FROM hosts WHERE name = ?1",
            params![host_name],
            |row| row.get(0),
        )
        .map_err(|e| e.to_string())?;

    // Get group ID
    let group_id: i32 = conn
        .query_row(
            "SELECT id FROM groups WHERE name = ?1",
            params![group_name],
            |row| row.get(0),
        )
        .map_err(|e| e.to_string())?;

    // Remove host from group
    conn.execute(
        "DELETE FROM group_host WHERE group_id = ?1 AND host_id = ?2",
        params![group_id, host_id],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}

// View the inventory
#[tauri::command]
pub fn view_inventory() -> Result<Vec<(String, String, Option<String>)>, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare(
            "SELECT g.name, h.name, h.ip_address
             FROM groups g
             JOIN group_host gh ON g.id = gh.group_id
             JOIN hosts h ON gh.host_id = h.id
             ORDER BY g.name, h.name",
        )
        .map_err(|e| e.to_string())?;

    let inventory = stmt
        .query_map([], |row| {
            Ok((
                row.get(0)?,
                row.get(1)?,
                row.get(2)?,
            ))
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<(String, String, Option<String>)>, _>>()
        .map_err(|e| e.to_string())?;

    Ok(inventory)
}