use rusqlite::{Connection, Result};
use serde::{Serialize, Deserialize};
use tauri::command;

#[derive(Serialize, Deserialize, Debug)]
pub struct InventoryItem {
    pub id: i32,
    pub name: String,
    pub ip_address: String,
}

#[command]
pub fn fetch_inventory() -> Result<Vec<InventoryItem>, String> {
    let conn = Connection::open("inventory.db").map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT id, name, ip_address FROM hosts")
        .map_err(|e| e.to_string())?;

    let inventory = stmt
        .query_map([], |row| {
            Ok(InventoryItem {
                id: row.get(0)?,
                name: row.get(1)?,
                ip_address: row.get(2)?,
            })
        })
        .map_err(|e| e.to_string())?;

    let result: Vec<InventoryItem> = inventory.filter_map(Result::ok).collect();
    Ok(result)
}
