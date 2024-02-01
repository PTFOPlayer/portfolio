import * as sql from "mysql";
import express from "express";
import cors from "cors";
import { settings, db_defaults } from "./defaults";
import { NewPostRequest } from "./post/new_post";

const app = express();
const port = 2223;

app.use(express.json());
app.use(cors());

import { router as get_router } from "./get/get_requests";
app.use("/", get_router);

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
    "INSERT INTO `post`(`post_id` `post_short_name`,`post_full_name`,`post_data`) VALUES (?,?,?,?)";

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

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
