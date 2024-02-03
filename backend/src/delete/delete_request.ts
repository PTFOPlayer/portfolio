import * as sql from "mysql";
import express from "express";
import { db_defaults, settings } from "../defaults";
import { DeleteContent, DeletePost } from "./delete";

export let delete_router = express.Router();

delete_router.patch("/api/delete_post", async (req, res) => {
  let request: DeletePost = req.body;
  if (request.password != settings.password || request.user != settings.user) {
    res.status(401).send("Wrong password");
    return;
  }
  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query = "DELETE FROM `post` WHERE post_id = ?";

  connection.query(query, [request.post_id], (err, result, _fields) => {
    if (err) {
      res.status(500).send("error occured while deleting (ᴗ╭╮ᴗ)" + err);
    } else {
      res.send("successfully deleted (^~^), " + JSON.stringify(result));
    }
  });

  connection.end();
});

delete_router.patch("/api/delete_content", async (req, res) => {
  let request: DeleteContent = req.body;
  console.log(request);
  if (request.password != settings.password || request.user != settings.user) {
    res.status(401).send("Wrong password");
    return;
  }
  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query =
    "DELETE FROM `text_content` WHERE post_content_id = ?; DELETE FROM `blob_content` WHERE post_content_id = ?; DELETE FROM `subtitle_content` WHERE post_content_id = ?; DELETE FROM `code_content` WHERE post_content_id = 2; DELETE FROM `post_content` WHERE post_content_id = ?;";

  connection.query(
    query,
    [
      request.post_content_id,
      request.post_content_id,
      request.post_content_id,
      request.post_content_id,
      request.post_content_id,
    ],
    (err, result, _fields) => {
      if (err) {
        res.status(500).send("error occured while deleting (ᴗ╭╮ᴗ)" + err);
      } else {
        res.send("successfully deleted (^~^), " + JSON.stringify(result));
      }
    }
  );

  connection.end();
});
