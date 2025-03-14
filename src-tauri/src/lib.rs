mod fetch_playbooks;
mod tauri_api;
mod fetch_inventory;

pub fn run() {
    if let Err(e) = tauri_api::create_db() {
        eprintln!("Error while creating database: {}", e);
        return;
    }
    tauri_api::run();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            fetch_playbooks::list_playbooks,
            tauri_api::add_host,
            tauri_api::get_hosts,
            tauri_api::add_group,
            tauri_api::get_groups,
            tauri_api::remove_host,
            tauri_api::modify_host,
            tauri_api::remove_group,
            tauri_api::modify_group,
            fetch_inventory::fetch_inventory,
        ])
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
