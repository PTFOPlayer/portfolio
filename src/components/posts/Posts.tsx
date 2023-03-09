import * as React from "react";
import projects_data from "../../assets/projects.json"
import "./posts.scss"
import "../../assets/langs.scss"
import tools from "../../scripts/toolsColor";

export default function Posts() {

  let data = projects_data.projects;

  return (
    <>
      {data.map(element => (
        <div className="post">
          <img alt=""></img>
          <div className="content">
            <div className="titleBar">
              {element.title ? <h1>{element.title}</h1> : null}
              {element.tools ?
                <ul>
                  {tools(element.tools)}
                </ul> : null
              }
            </div>
            <div className="projectDescription">
              <h3>Description:</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis quos unde distinctio. Accusamus, blanditiis. Numquam eum recusandae autem officiis labore, at repellat! Ut ab magni veniam ipsum, inventore suscipit.</p>
              {element.link ? <a href={element.link}>{element.link}</a> : null}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}