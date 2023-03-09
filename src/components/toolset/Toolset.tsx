import * as React from "react";
import "./toolset.scss"
import data from "../../assets/toolset.json"
import tool from "../../scripts/toolColor";

export default function Toolset() {
  return (
    <>
      {data.tools.map((e)=> (
        <div className="tool">
          <div className="content">
            <h1>{tool(e.tool)}</h1>
          </div>  
        </div>
      ))}
    </>
  )
}