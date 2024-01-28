import * as React from "react";
import "./topbar.scss";
import { UserAgentProvider, UserAgent } from "@quentin-sommer/react-useragent";

export default function Topbar() {
  return (
    <UserAgentProvider ua={window.navigator.userAgent}>
      <div className="topbar">
        <div className="top">
          <div className="top-left">
            <UserAgent mobile>
              <a className="bmc" href="https://www.buymeacoffee.com/WhiskyAKM">
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                />
              </a>
            </UserAgent>
            <a href="https://github.com/PTFOPlayer/">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="top-center">
            <ul className="top-list">
              <li className="top-list-item">
                <a href="/" className="inherit">
                  Home
                </a>
              </li>
              <li className="top-list-item">
                <a href="/#/projects" className="inherit">
                  Projects
                </a>
              </li>
              <li className="top-list-item">
                <a href="/#/contact" className="inherit">
                  Contact
                </a>
              </li>
              <li className="top-list-item">
                <a href="/#/tutorials" className="inherit">
                  Tutorials
                </a>
              </li>
              <UserAgent mobile>
                <li className="top-list-item">
                  <a
                    className="top-list-item"
                    href="https://ptfoplayer.github.io/technews/#/"
                  >
                    Technews
                  </a>
                </li>
              </UserAgent>
            </ul>
          </div>
          <div className="top-right">
            <ul className="top-list">
              <UserAgent computer>
                <a
                  className="bmc"
                  href="https://www.buymeacoffee.com/WhiskyAKM"
                >
                  <img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                  />
                </a>
                <li className="top-list-item">
                  <a
                    className="top-list-item"
                    href="https://ptfoplayer.github.io/technews/#/"
                  >
                    Technews
                  </a>
                </li>
              </UserAgent>
            </ul>
          </div>
        </div>
      </div>
    </UserAgentProvider>
  );
}
