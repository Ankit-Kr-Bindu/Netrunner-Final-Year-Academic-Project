use std::fs;
use std::path::Path;

#[tauri::command]
pub fn list_playbooks() -> Result<Vec<String>, String> {
    let playbooks_dir = "./ansible-playbooks";
    let mut playbooks = Vec::new();

    fn visit_dirs(dir: &Path, playbooks: &mut Vec<String>) -> std::io::Result<()> {
        if dir.is_dir() {
            for entry in fs::read_dir(dir)? {
                let entry = entry?;
                let path = entry.path();
                if path.is_dir() {
                    visit_dirs(&path, playbooks)?;
                } else if let Some(extension) = path.extension() {
                    if extension == "yml" || extension == "yaml" {
                        if let Some(file_name) = path.file_name() {
                            playbooks.push(file_name.to_string_lossy().to_string());
                        }
                    }
                }
            }
        }
        Ok(())
    }

    visit_dirs(Path::new(playbooks_dir), &mut playbooks).map_err(|e| e.to_string())?;
    Ok(playbooks)
}