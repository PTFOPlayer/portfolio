import * as sql from "mysql";
import express from "express";
import { db_defaults } from "../defaults";
import filter from "../filter";

export let router = express.Router();

router.get("/api/get_posts_short", async (_req, res) => {
  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query = "SELECT post_id, post_short_name FROM post";
  connection.query(query, (err, result, _fields) => {
    if (err) {
      res.status(500).send("error occured while pulling (ᴗ╭╮ᴗ)" + err);
    } else {
      res.send(JSON.stringify(result));
    }
  });

  connection.end();
});

router.get("/api/get_posts_full", async (_req, res) => {
  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query = "SELECT * FROM post";
  connection.query(query, (err, result, _fields) => {
    if (err) {
      res.status(500).send("error occured while pulling (ᴗ╭╮ᴗ)" + err);
    } else {
      res.send(JSON.stringify(result));
    }
  });

  connection.end();
});

router.get("/api/get_post_by_id/:id", async (req, res) => {
  let id = req.params.id;

  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query =
    "SELECT * FROM post LEFT JOIN post_content ON post.post_id = post_content.post_id WHERE post.post_id = ?";

  connection.query(query, [id], (err, result, _fields) => {
    if (err) {
      res.status(500).send("error occured while pulling (ᴗ╭╮ᴗ)" + err);
    } else {
      res.send(JSON.stringify(result));
    }
  });

  connection.end();
});

router.get("/api/get_content_by_post_id/:id", async (req, res) => {
  let id = req.params.id;

  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query = `SELECT
      post_content.post_content_id,
      subtitle_content.subtitle_content_id,
      subtitle_content.subtitle_data,
      text_content.text_content_id,
      text_content.text_data,
      code_content.code_content_id,
      code_content.code_language,
      code_content.code_data,
      blob_content.blob_content_id,
      blob_content.blob_data
  FROM
      post_content
  LEFT JOIN subtitle_content ON post_content.post_content_id = subtitle_content.post_content_id
  LEFT JOIN text_content ON post_content.post_content_id = text_content.post_content_id
  LEFT JOIN code_content ON post_content.post_content_id = code_content.post_content_id
  LEFT JOIN blob_content ON post_content.post_content_id = blob_content.post_content_id
  WHERE
      post_id = ?
  ORDER BY
      post_content.post_content_id;`;

  connection.query(query, [id], (err, result, _fields) => {
    if (err) {
      res.status(500).send("error occured while pulling (ᴗ╭╮ᴗ)" + err);
    } else {
      filter(result);
      res.send(JSON.stringify(result));
    }
  });

  connection.end();
});
