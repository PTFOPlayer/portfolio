export interface NewPostRequest {
  user: string;
  password: string;
  post_id: number;
  post_short_name: string;
  post_full_name: string;
}

export interface BlobContent {
  blob_data: Blob;
}

export interface CodeContent {
  code_language: string;
  code_data: string;
}

export interface SubtitleContent {
  subtitle_data: string;
}

export interface TextContent {
  text_data: string;
}

export interface ContentPostRequest<
  T extends BlobContent | CodeContent | SubtitleContent | TextContent
> {
  user: string;
  password: string;
  post_id: number;
  content: T;
}
