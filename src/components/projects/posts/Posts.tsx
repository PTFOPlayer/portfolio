import * as React from "react";
import projects_data from "../../../assets/projects.json";
import "./posts.scss";
import "../../../assets/langs.scss";
import Post from "../post/Post";
import { ElementData } from "./Posts.d";

export default function Posts() {
  let data = projects_data.projects;

  return (
    <>
      <div className="posts_header">
        <img className="langs"
          src="https://camo.githubusercontent.com/f7ab5c21b6d8bf06b0f599795942a9a65779c4735d198390eb2c5129bd91cd3f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d5054464f706c61796572266c61796f75743d636f6d70616374267468656d653d7261646963616c266c616e67735f636f756e743d38"
          alt="img not found"
          loading="lazy"
        />
      </div>
      {data.map((element) => (
        <>{Post(element as ElementData)}</>
      ))}
    </>
  );
}
