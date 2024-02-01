import settings_json from "./data.json";

export interface ServerSettings {
    user: string,
    password_db: string,
    password: string,
    host: string,
    db: string,    
}

export const settings = settings_json as ServerSettings;

export const db_defaults = {
  user: settings.user,
  password: settings.password_db,
  host: settings.host,
  database: settings.db,
};