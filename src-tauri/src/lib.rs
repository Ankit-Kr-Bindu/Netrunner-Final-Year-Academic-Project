mod fetch_playbooks;
mod inventory;
mod fetch_inventory;

pub fn run() {
    // Initialize the database
    if let Err(e) = inventory::create_db() {
        eprintln!("Error while creating database: {}", e);
        return;
    }

    // Run Tauri application
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            fetch_playbooks::list_playbooks,
            inventory::add_host,
            inventory::get_hosts,
            inventory::add_group,
            inventory::get_groups,
            inventory::remove_host,
            inventory::modify_host,
            inventory::remove_group,
            inventory::modify_group,
            fetch_inventory::fetch_inventory,
            inventory::assign_host_to_group,
            inventory::reassign_host_to_group,
            inventory::remove_host_from_group,
            inventory::view_inventory,
        ])
        .setup(|_app| {
            // Disable icon loading
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}