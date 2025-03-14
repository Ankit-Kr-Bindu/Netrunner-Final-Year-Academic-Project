use rusqlite::{params, Connection, Result};
use serde::{Serialize, Deserialize};
use tauri::command;

#[derive(Serialize, Deserialize, Debug)]
pub struct Host {
    pub name: String,
    pub ip_address: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Group {
    pub name: String,
}

// Create the database schema (run only once to initialize)
pub fn create_db() -> Result<()> {
    let conn = Connection::open("inventory.db")?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS hosts (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            ip_address TEXT NOT NULL
        )",
        [],
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS groups (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        )",
        [],
    )?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS group_hosts (
            group_id INTEGER,
            host_id INTEGER,
            FOREIGN KEY (group_id) REFERENCES groups (id),
            FOREIGN KEY (host_id) REFERENCES hosts (id)
        )",
        [],
    )?;

    Ok(())
}

// Command to add a new host
#[command]
pub fn add_host(name: String, ip_address: String) -> Result<String, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;

    conn.execute(
        "INSERT INTO hosts (name, ip_address) VALUES (?1, ?2)",
        params![name, ip_address],
    )
    .map_err(|e| e.to_string())?;

    Ok("Host added successfully".into())
}

// Command to fetch all hosts
#[command]
pub fn get_hosts() -> Result<Vec<Host>, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT name, ip_address FROM hosts")
        .map_err(|e| e.to_string())?;

    let hosts = stmt
        .query_map([], |row| {
            Ok(Host {
                name: row.get(0)?,
                ip_address: row.get(1)?,
            })
        })
        .map_err(|e| e.to_string())?;

    let result: Vec<Host> = hosts.filter_map(Result::ok).collect();
    Ok(result)
}

// Command to add a new group
#[command]
pub fn add_group(name: String) -> Result<String, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;

    conn.execute(
        "INSERT INTO groups (name) VALUES (?1)",
        params![name],
    )
    .map_err(|e| e.to_string())?;

    Ok("Group added successfully".into())
}

// Command to fetch all groups
#[command]
pub fn get_groups() -> Result<Vec<Group>, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT name FROM groups")
        .map_err(|e| e.to_string())?;

    let groups = stmt
        .query_map([], |row| Ok(Group { name: row.get(0)? }))
        .map_err(|e| e.to_string())?;

    let result: Vec<Group> = groups.filter_map(Result::ok).collect();
    Ok(result)
}

// Command to remove a host
#[command]
pub fn remove_host(name: String) -> Result<String, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;

    conn.execute(
        "DELETE FROM hosts WHERE name = ?1",
        params![name],
    )
    .map_err(|e| e.to_string())?;

    Ok("Host removed successfully".into())
}

// Command to modify a host
#[command]
pub fn modify_host(old_name: String, new_name: String, new_ip_address: String) -> Result<String, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;

    conn.execute(
        "UPDATE hosts SET name = ?1, ip_address = ?2 WHERE name = ?3",
        params![new_name, new_ip_address, old_name],
    )
    .map_err(|e| e.to_string())?;

    Ok("Host modified successfully".into())
}

// Command to remove a group
#[command]
pub fn remove_group(name: String) -> Result<String, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;

    conn.execute(
        "DELETE FROM groups WHERE name = ?1",
        params![name],
    )
    .map_err(|e| e.to_string())?;

    Ok("Group removed successfully".into())
}

// Command to modify a group
#[command]
pub fn modify_group(old_name: String, new_name: String) -> Result<String, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;

    conn.execute(
        "UPDATE groups SET name = ?1 WHERE name = ?2",
        params![new_name, old_name],
    )
    .map_err(|e| e.to_string())?;

    Ok("Group modified successfully".into())
}

// Run the database setup
pub fn run() {
    create_db().unwrap();
}

// #[cfg(test)]
// mod tests {
//     use super::*;

//     fn clean_db() {
//         let conn = Connection::open("inventory.db").unwrap();
//         conn.execute("DELETE FROM hosts", []).unwrap();
//         conn.execute("DELETE FROM groups", []).unwrap();
//     }

//     #[test]
//     fn test_add_and_get_hosts() {
//         // Initialize the database
//         create_db().unwrap();
//         clean_db();

//         // Add a host
//         let add_result = add_host("Test Host".into(), "127.0.0.1".into());
//         assert!(add_result.is_ok());

//         // Fetch hosts
//         let hosts = get_hosts().unwrap();
//         assert_eq!(hosts.len(), 1);
//         assert_eq!(hosts[0].name, "Test Host");
//         assert_eq!(hosts[0].ip_address, "127.0.0.1");
//     }

//     #[test]
//     fn test_add_and_get_groups() {
//         // Initialize the database
//         create_db().unwrap();
//         clean_db();

//         // Add a group
//         let add_result = add_group("Test Group".into());
//         assert!(add_result.is_ok());

//         // Fetch groups
//         let groups = get_groups().unwrap();
//         assert_eq!(groups.len(), 1);
//         assert_eq!(groups[0].name, "Test Group");
//     }

//     #[test]
//     fn test_remove_host() {
//         // Initialize the database
//         create_db().unwrap();
//         clean_db();

//         // Add a host
//         add_host("Test Host".into(), "127.0.0.1".into()).unwrap();

//         // Fetch hosts before removal
//         let hosts_before = get_hosts().unwrap();
//         println!("Hosts before removal: {:?}", hosts_before);

//         // Remove the host
//         let remove_result = remove_host("Test Host".into());
//         assert!(remove_result.is_ok());

//         // Fetch hosts after removal
//         let hosts_after = get_hosts().unwrap();
//         println!("Hosts after removal: {:?}", hosts_after);

//         assert!(hosts_after.is_empty());
//     }

//     #[test]
//     fn test_modify_host() {
//         // Initialize the database
//         create_db().unwrap();
//         clean_db();

//         // Add a host
//         add_host("Test Host".into(), "127.0.0.1".into()).unwrap();

//         // Fetch hosts before modification
//         let hosts_before = get_hosts().unwrap();
//         println!("Hosts before modification: {:?}", hosts_before);

//         // Modify the host
//         let modify_result = modify_host("Test Host".into(), "Modified Host".into(), "192.168.0.1".into());
//         assert!(modify_result.is_ok());

//         // Fetch hosts after modification
//         let hosts_after = get_hosts().unwrap();
//         println!("Hosts after modification: {:?}", hosts_after);

//         assert_eq!(hosts_after.len(), 1);
//         assert_eq!(hosts_after[0].name, "Modified Host");
//         assert_eq!(hosts_after[0].ip_address, "192.168.0.1");
//     }

//     #[test]
//     fn test_remove_group() {
//         // Initialize the database
//         create_db().unwrap();
//         clean_db();

//         // Add a group
//         add_group("Test Group".into()).unwrap();

//         // Remove the group
//         let remove_result = remove_group("Test Group".into());
//         assert!(remove_result.is_ok());

//         // Fetch groups
//         let groups = get_groups().unwrap();
//         assert!(groups.is_empty());
//     }

//     #[test]
//     fn test_modify_group() {
//         // Initialize the database
//         create_db().unwrap();
//         clean_db();

//         // Add a group
//         add_group("Test Group".into()).unwrap();

//         // Modify the group
//         let modify_result = modify_group("Test Group".into(), "Modified Group".into());
//         assert!(modify_result.is_ok());

//         // Fetch groups
//         let groups = get_groups().unwrap();
//         assert_eq!(groups.len(), 1);
//         assert_eq!(groups[0].name, "Modified Group");
//     }
// }