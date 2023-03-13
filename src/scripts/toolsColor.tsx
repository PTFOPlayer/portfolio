import React from "react";

class toolColor {
  public static tool(tool: String) {

    tool = tool.toLowerCase()

    let toolSwitch = (t: String) => {
      switch (t) {
        case "rust": 
          return <p className="rust"><i className='fab fa-rust' /> Rust </p>
        case "mongodb": 
          return <p className="mongodb"><i className="fas fa-database" /> MongoDB</p> 
        case "c++":
          return <p className="cpp"> C++ </p>
        case "shell":
          return <p className="shell"><i className="fa-solid fa-terminal" /> Shell </p>
        case "docker":
          return <p className="docker"><i className="fa-brands fa-docker" /> Docker </p>
        case "python":
          return <p className="python"><i className="fa-brands fa-python" /> Python </p>
        case "javascript":
          return <p className="js"><i className="fa-brands fa-js" /> Javascript </p> 
        case "typescript":
          return <p className="ts"> Typescript </p>
        case "scss":
          return <p className="sass"><i className="fa-brands fa-sass" /> Scss </p>
        case "react":
          return <p className="react"><i className="fa-brands fa-react" /> React </p>
        case "css":
          return <p className="css"><i className="fa-brands fa-css3" /> Css </p>
        default:
          return <p>{t}</p>
      }
    }

    return (<>{toolSwitch(tool)}</>)
  }

  public static tools(tools:Array<String>) {
    return (
      <>
        {tools.map((t, key: number) => (
          <li key={key}>
            {this.tool(t)}
          </li>
        ))}
      </>
    )
  }
}

export default toolColor;