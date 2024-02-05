import * as sql from "mysql";
import express from "express";
import { db_defaults, settings } from "../defaults";
import { PatchPostShort } from "./patch";

export let patch_router = express.Router();

patch_router.patch("/api/patch_post_short_name", async (req, res) => {
  let request: PatchPostShort = req.body;
  if (request.password != settings.password || request.user != settings.user) {
    res.status(401).send("Wrong password");
    return;
  }

  let connection = await sql.createConnection(db_defaults);

  await connection.connect();


  let query =
    "UPDATE `post` SET `post_short_name` = ? WHERE post_id = ?";

  connection.query(
    query,
    [request.post_short_name, request.post_id],
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

patch_router.patch("/api/patch_post_short_name", async (req, res) => {
    let request: PatchPostShort = req.body;
    if (request.password != settings.password || request.user != settings.user) {
      res.status(401).send("Wrong password");
      return;
    }
  
    let connection = await sql.createConnection(db_defaults);
  
    await connection.connect();
  
  
    let query =
      "UPDATE `post` SET `post_full_name` = ? WHERE post_id = ?";
  
    connection.query(
      query,
      [request.post_short_name, request.post_id],
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
