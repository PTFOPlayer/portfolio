export interface ServerSettings {
    user: string,
    password_db: string,
    password: string,
    host: string,
    db: string,    
}

export interface content {
    name: string,
    type: string,
    text: string
}

export interface post_request {
    passwd: string,
    name: string,
    version: string
}

export interface content_request {
    passwd: string,
    data: content[]
}