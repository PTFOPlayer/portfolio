import * as React from "react";
import projects_data from "../../assets/projects.json"
import "./posts.scss"
import "../../assets/langs.scss"

export default function Posts() {

  let data = projects_data.projects;

  let tool = (tools: Array<String>) => {
    return (
      <>
        {tools.map(tool => (
          <li>
            {
              tool === "rust" ? <p className="rust"><i className='fab fa-rust' /> {tool}</p> :
                tool === "mongodb" ? <p className="mongodb"><i className="fas fa-database" />MongoDB</p> :
                  tool === "c++" ? <p className="cpp"> C++ </p> :
                    tool === "shell" ? <p className="shell"><i className="fa-solid fa-terminal" /> shell </p> :
                      tool === "docker" ? <p className="docker"><i className="fa-brands fa-docker" /> docker </p> :
                        <p>{tool}</p>
            }
          </li>
        ))}
      </>
    )
  }

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
                  {tool(element.tools)}
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