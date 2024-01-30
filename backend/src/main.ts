import * as sql from "mysql";
import express from "express";
import settings_json from "./data.json";
import cors from "cors";

import { L2cache, PersistantCache } from "./cache/cache";
import {
  content,
  content_request,
  post_request,
  ServerSettings,
} from "./interfaces/interfaces";
import { NewPostRequest } from "./interfaces/new_post";
const settings = settings_json as ServerSettings;
const db_defaults = {
  user: settings.user,
  password: settings.password_db,
  host: settings.host,
  database: settings.db,
};

const app = express();
const port = 2223;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => res.send("hellooo (^u^)"));

app.post("/api/new_post", async (req, res) => {
  let request: NewPostRequest = req.body;
  if (request.password != settings.password || request.user != settings.user) {
    res.status(401).send("Wrong password");
    return;
  }

  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let date = new Date();

  let query =
    "INSERT INTO `post`(`post_short_name`,`post_full_name`,`post_data`) VALUES (?,?,?)";

  connection.query(
    query,
    [request.post_full_name, request.post_full_name, date],
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

app.get("/api/get_posts_short", async (_req, res) => {
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

app.get("/api/get_posts_full", async (_req, res) => {
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

app.get("/api/get_post_by_id/:id", async (req, res) => {
  let name = req.params.id;

  let connection = await sql.createConnection(db_defaults);

  await connection.connect();

  let query =
    "SELECT * FROM post LEFT JOIN post_content ON post.post_id = post_content.post_id WHERE post.post_id = ?";
  connection.query(query, [name], (err, result, _fields) => {
    if (err) {
      res.status(500).send("error occured while pulling (ᴗ╭╮ᴗ)" + err);
    } else {
      res.send(JSON.stringify(result));
    }
  });

  connection.end();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
