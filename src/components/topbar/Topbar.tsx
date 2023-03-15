import * as React from "react";
import "./topbar.scss";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="top">
        <div className="top-left">
          <a href="https://github.com/PTFOPlayer/"><i className="topIcon fab fa-github"></i></a>
        </div>
        <div className="top-center">
          <ul className="top-list">
            <li className="top-list-item"><a href='/portfolio' className="inherit">Home</a></li>
            <li className="top-list-item"><a href='/portfolio/#/projects' className="inherit">Projects</a></li>
            <li className="top-list-item"><a href='/portfolio/#/contact' className="inherit">Contact</a></li>
          </ul>
        </div>
        <div className="top-right">
          <a className="top-list-item" href="https://ptfoplayer.github.io/technews/#/">Technews</a>
        </div>
      </div>
    </div>
  );
}