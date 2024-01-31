export interface NewPostRequest {
    user: string,
    password: string,
    post_id: number,
    post_short_name: string,
    post_full_name: string,
    post_data: string
}