mod fetch_playbooks;

pub fn run(){tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
        fetch_playbooks::list_playbooks
    ])
    .run(tauri::generate_context!())
    .expect("error while running Tauri application");
}
