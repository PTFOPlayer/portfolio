import React from "react"
import toolsColor from "../../scripts/toolsColor"
import "./post.scss"
export default function Post(element: any) {
    
    return (
    <>
        <div className="post">
          <img alt=""></img>
          <div className="content">
            <div className="titleBar">
              {element.title ? <h1>{element.title}</h1> : null}
              {element.tools ?
                <ul>
                  {toolsColor.tools(element.tools)}
                </ul> : null
              }
            </div>
            <div className="projectDescription">
              {element.description ? 
              <>
                <h3>Description:</h3>
                <p>{element.description}</p>
              </>:
              null}
              {element.link ? <a href={element.link}>{element.link}</a> : null}
            </div>
          </div>
        </div>
    </>)
}