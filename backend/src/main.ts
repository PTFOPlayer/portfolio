import express from "express";
import cors from "cors";

const app = express();
const port = 2223;

app.use(express.json());
app.use(cors());

import { get_router } from "./get/get_requests";
app.use("/backend/", get_router);

import { post_router } from "./post/post_requests";
app.use("/backend/", post_router);

import { delete_router } from "./delete/delete_request";
app.use("/backend/", delete_router);

import { patch_router } from "./patch/patch_request";
app.use("/backend/", patch_router);

app.get("/backend/", (req, res) => res.send("hellooo (^u^)"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
