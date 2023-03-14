import React from "react";
import projects_data from "../../assets/projects.json"
import "./postslist.scss"

export default function PostsList() {
  let data = projects_data.projects
  let titles = data.map(e => e.title)
  return (
    <div className="post_list" >
      <h2> Projects List</h2>
      <div className="img"></div>
      <div>
        {titles.map((e, key) => (
          <p key={key}>{e}</p>
        ))}
      </div>
    </div>
  )
}