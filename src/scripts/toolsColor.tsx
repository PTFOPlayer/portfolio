import React from "react";
import tool from "./toolColor";
let tools = (tools: Array<String>) => {
    return (
      <>
        {tools.map(t => (
          <li>
            {tool(t)}
          </li>
        ))}
      </>
    )
}

export default tools;