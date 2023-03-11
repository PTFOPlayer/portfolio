import * as React from "react";
import "./toolset.scss"
import data from "../../assets/toolset.json"
import Tool from "../tool/Tool";

export default function Toolset() {
  return (
    <>
      <div className="tools">
        <h1>Why those tools?</h1>
        <p>Qucik explanation why a choose to learn that toolset.</p>
      </div>
      {data.tools.map((e, key: number)=> (
        <div key={key}>{Tool(e)}</div>
      ))}
    </>
  )
}