import React from "react";
import toolColor from "../../scripts/toolsColor";
import "./tutoring.scss"
export default function Tutoring() {
  return (
    <div className="tutoring">
      <h1>Only in polish!</h1>
      <p>Oferuje korepetycje, doszkalanie oraz nauke programowania, obsługi systemu Linux oraz innych rzeczy związanych z dziedzinami informatyki. </p>
      <h3>Oferuje naukę programowania w językach:</h3>
      <ul>
        <li> {toolColor.tool("rust")}  </li>
        <li> {toolColor.tool("C")} </li>
        <li> {toolColor.tool("C++")}  </li>
        <li> {toolColor.tool("Python")}  </li>
        <li> {toolColor.tool("javascript")}  </li>
      </ul>
      <h3>Naukę użytkowania wielu dystrybucji Linuxa, między innymi:</h3>
      <ul>
        <li> <p className="manjaro">Manjaro (rodzina arch)</p> </li>
        <li> <p className="ubuntu">Ubuntu (rodzina debiana)</p> </li>
        <li> <p className="fedora">Fedora (rodzina RHEL)</p>  </li>
      </ul>
    </div>
  )
}