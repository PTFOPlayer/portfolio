import * as React from "react";
import projects_data from "../../assets/projects.json"
import "./posts.scss"


export default function Posts() {

  let data = projects_data.projects
  return (
    <>
      {data.map(element => (
        <div className="post">
          <div className="content">
            {element.title ? <h1>{element.title}</h1> : null}
            {element.tools ?
              <li>
                {element.tools.map(tool => (
                  <p>
                    {tool}
                  </p>
                ))}
              </li> : null}
          </div>
        </div>
      ))}
    </>
  );
}