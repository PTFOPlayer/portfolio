import React from "react";
import toolsColor from "../../scripts/toolsColor";
import "./tool.scss"

export default function Tool(e: any) {

  return (
    <div className="tool">
      <div className="content">
        <h1>{toolsColor.tool(e.tool)}</h1>
        {e.description ? <span>{e.description}</span> : null}
      </div>
    </div>
  )
}