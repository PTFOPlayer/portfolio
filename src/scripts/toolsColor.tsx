import React from "react";

class toolColor {
  public static tool(tool: String) {
    return (
      <>
        {
            tool === "rust" || tool === "Rust" ? <p className="rust"><i className='fab fa-rust' /> {tool}</p> :
            tool === "mongodb" || tool === "Mongodb" || tool === "MongoDB" ? <p className="mongodb"><i className="fas fa-database" />MongoDB</p> :
            tool === "c++" || tool === "C++" ? <p className="cpp"> C++ </p> :
            tool === "shell" ? <p className="shell"><i className="fa-solid fa-terminal" /> Shell </p> :
            tool === "docker" ? <p className="docker"><i className="fa-brands fa-docker" /> Docker </p> :
            tool === "python" || tool === "Python"  ? <p className="python"><i className="fa-brands fa-python" /> Python </p> :
            tool === "Javascript" || tool === "javascript" || tool === "js" || tool === "JS" ? <p className="js"><i className="fa-brands fa-js" /> Javascript </p> :
            tool === "Typescript" || tool === "typescript" || tool === "ts" || tool === "TS" ? <p className="ts"> Typescript </p> : 
            tool === "scss" || tool === "SCSS" || tool === "Scss" ? <p className="sass"><i className="fa-brands fa-sass" /> Scss </p> :
            tool === "React" || tool === "react" ? <p className="react"><i className="fa-brands fa-react" /> React </p> :
            <p>{tool}</p>
        }
    </>
    ) 
  }
  public static tools(tools:Array<String>) {
    return (
      <>
        {tools.map(t => (
          <li>
            {this.tool(t)}
          </li>
        ))}
      </>
    )
  }
}

export default toolColor;