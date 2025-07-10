import * as React from "react";
import "./toolset.scss";
import data from "../../../assets/toolset.json";
import Tool from "../tool/Tool";

export default function Toolset() {
  return (
    <>
      <div className="tools">
        <h1>Why those tools?</h1>
        <p>Qucik explanation why I choose to learn that toolset.</p>
      </div>
      {data.tools.map((e) => (
        <div key={Array.isArray(e.tool) ? e.tool.join("-") : e.tool}>
          {Tool(e)}
        </div>
      ))}
    </>
  );
}
