import * as sql from "mysql";
import express from "express";
import {
  BlobContent,
  CodeContent,
  ContentPostRequest,
  NewPostRequest,
  SubtitleContent,
  TextContent,
} from "./post";
import { db_defaults, settings } from "../defaults";

export let post_router = express.Router();

post_router.post("/api/new_post", async (req, res) => {
  let request: NewPostRequest = req.body;
  if (request.password != settings.password || request.user != settings.user) {
    res.status(401).send("Wrong password");
    return;
  }

  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let date = new Date();

  let query =
    "INSERT INTO `post`(`post_id`, `post_short_name`,`post_full_name`,`post_date`) VALUES (?,?,?,?)";

  connection.query(
    query,
    [request.post_id, request.post_full_name, request.post_full_name, date],
    (err, result, _fields) => {
      if (err) {
        res.status(500).send("error occured while inserting (ᴗ╭╮ᴗ)" + err);
      } else {
        res.send("successfully inserted (^~^), " + JSON.stringify(result));
      }
    }
  );

  connection.end();
});

post_router.post("/api/new_text_content/", async (req, res) => {
  let request: ContentPostRequest<TextContent>;

  try {
    request = req.body as ContentPostRequest<TextContent>;
  } catch {
    res.status(422).send("error: wrong body content (ᴗ╭╮ᴗ)");
    return;
  }

  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query =
    "INSERT INTO `post_content`(`post_content_id`, `post_id`) SELECT MAX(post_content_id)+1, ? AS max_id FROM `post_content` WHERE post_id >= ? AND post_id < ?; INSERT INTO `text_content`(`post_content_id`, `text_data`) SELECT MAX(post_content_id), ? AS max_id FROM `post_content` WHERE post_id >= ? AND post_id < ?;";

  let [content_min, content_max] = [
    request.post_id * 100,
    request.post_id * 100 + 100,
  ];

  let content = request.content.text_data;
  connection.query(
    query,
    [
      request.post_id,
      content_min,
      content_max,
      content,
      content_min,
      content_max,
    ],
    (err, result, _fields) => {
      if (err) {
        res.status(500).send("error occured while inserting (ᴗ╭╮ᴗ)" + err);
      } else {
        res.send("successfully inserted (^~^), " + JSON.stringify(result));
      }
    }
  );

  connection.end();
});

post_router.post("/api/new_subtitle_content/", async (req, res) => {
  let request: ContentPostRequest<SubtitleContent>;

  try {
    request = req.body as ContentPostRequest<SubtitleContent>;
  } catch {
    res.status(422).send("error: wrong body content (ᴗ╭╮ᴗ)");
    return;
  }

  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query =
    "INSERT INTO `post_content`(`post_content_id`, `post_id`) SELECT MAX(post_content_id)+1, ? AS max_id FROM `post_content` WHERE post_id >= ? AND post_id < ?; INSERT INTO `subtitle_content`(`post_content_id`, `subtitle_data`) SELECT MAX(post_content_id), ? AS max_id FROM `post_content` WHERE post_id >= ? AND post_id < ?;";

  let [content_min, content_max] = [
    request.post_id * 100,
    request.post_id * 100 + 100,
  ];

  let content = request.content.subtitle_data;
  connection.query(
    query,
    [
      request.post_id,
      content_min,
      content_max,
      content,
      content_min,
      content_max,
    ],
    (err, result, _fields) => {
      if (err) {
        res.status(500).send("error occured while inserting (ᴗ╭╮ᴗ)" + err);
      } else {
        res.send("successfully inserted (^~^), " + JSON.stringify(result));
      }
    }
  );

  connection.end();
});

post_router.post("/api/new_blob_content/", async (req, res) => {
  let request: ContentPostRequest<BlobContent>;

  try {
    request = req.body as ContentPostRequest<BlobContent>;
  } catch {
    res.status(422).send("error: wrong body content (ᴗ╭╮ᴗ)");
    return;
  }

  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query =
    "INSERT INTO `post_content`(`post_content_id`, `post_id`) SELECT MAX(post_content_id)+1, ? AS max_id FROM `post_content` WHERE post_id >= ? AND post_id < ?; INSERT INTO `blob_content`(`post_content_id`, `blob_data`) SELECT MAX(post_content_id), ? AS max_id FROM `post_content` WHERE post_id >= ? AND post_id < ?;";

  let [content_min, content_max] = [
    request.post_id * 100,
    request.post_id * 100 + 100,
  ];

  let content = request.content.blob_data;
  connection.query(
    query,
    [
      request.post_id,
      content_min,
      content_max,
      content,
      content_min,
      content_max,
    ],
    (err, result, _fields) => {
      if (err) {
        res.status(500).send("error occured while inserting (ᴗ╭╮ᴗ)" + err);
      } else {
        res.send("successfully inserted (^~^), " + JSON.stringify(result));
      }
    }
  );

  connection.end();
});

post_router.post("/api/new_code_content/", async (req, res) => {
  let request: ContentPostRequest<CodeContent>;

  try {
    request = req.body as ContentPostRequest<CodeContent>;
  } catch {
    res.status(422).send("error: wrong body content (ᴗ╭╮ᴗ)");
    return;
  }

  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query =
    "INSERT INTO `post_content`(`post_content_id`, `post_id`) SELECT MAX(post_content_id)+1, ? AS max_id FROM `post_content` WHERE post_id >= ? AND post_id < ?; INSERT INTO `code_content`(`post_content_id`, `code_data`, `code_language`) SELECT MAX(post_content_id), ?, ? AS max_id FROM `post_content` WHERE post_id >= ? AND post_id < ?;";

  let [content_min, content_max] = [
    request.post_id * 100,
    request.post_id * 100 + 100,
  ];

  let content = request.content.code_data;
  let language = request.content.code_language;
  connection.query(
    query,
    [
      request.post_id,
      content_min,
      content_max,
      content,
      language,
      content_min,
      content_max,
    ],
    (err, result, _fields) => {
      if (err) {
        res.status(500).send("error occured while inserting (ᴗ╭╮ᴗ)" + err);
      } else {
        res.send("successfully inserted (^~^), " + JSON.stringify(result));
      }
    }
  );

  connection.end();
});
