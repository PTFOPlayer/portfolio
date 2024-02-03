import express from "express";
import cors from "cors";

const app = express();
const port = 2223;

app.use(express.json());
app.use(cors());

import { router as get_router } from "./get/get_requests";
app.use("/", get_router);

import { router as post_router } from "./post/post_requests";
app.use("/", post_router);

import { delete_router } from "./delete/delete_request";
app.use("/", delete_router);

app.get("/api", (req, res) => res.send("hellooo (^u^)"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
