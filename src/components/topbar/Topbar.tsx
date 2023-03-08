import * as React from "react";
import "./topbar.scss";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="top">
        <div className="top-left">
          <a href="https://github.com/PTFOPlayer/technews"><i className="topIcon fab fa-github"></i></a>
        </div>
        <div className="top-center">
          <ul className="top-list">
            <li className="top-list-item"><a href='/portfolio' className="inherit">Home</a></li>
            <li className="top-list-item"><a href='/portfolio' className="inherit">Projects</a></li>
            <li className="top-list-item"><a href='/portfolio' className="inherit">Contacts</a></li>
          </ul>
        </div>
        <div className="top-right" />
      </div>
    </div>
  );
}