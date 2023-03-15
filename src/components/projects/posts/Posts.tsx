import * as React from "react";
import projects_data from "../../../assets/projects.json"
import "./posts.scss"
import "../../../assets/langs.scss"
import Post from "../post/Post";

export default function Posts() {
  let data = projects_data.projects;

  return (
    <>
      {data.map(element => <>{Post(element)}</>)}
    </>
  );
}