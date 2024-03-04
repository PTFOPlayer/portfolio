import * as React from "react";
import "./topbar.scss";
import { useState } from "react";

interface Item {
  name: string;
  url: string;
}

export default function Topbar() {
  let list: Array<Item> = [
    { url: "/#/", name: "Home" },
    { url: "/#/projects", name: "Projects" },
    { url: "/#/career", name: "Career" },
    { url: "/#/contact", name: "Contact" },
    { url: "/#/tutorials", name: "Tutorials" },
  ];

  const width = window.innerWidth;

  if (width < 1024) {
    return <MobileTopbar list={list} />;
  } else {
    return <DestkopTopbar list={list} />;
  }
}

function MobileTopbar(props: { list: Array<Item> }) {
  const [display, setDisplay] = useState("hidden");
  return (
    <>
      <div className="top">
        <div className="top-left"></div>
        <div className="top-center">
          <a href="https://github.com/PTFOPlayer/">
            <i className="fab fa-github"></i>
          </a>
          <a className="bmc" href="https://www.buymeacoffee.com/WhiskyAKM">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
            />
          </a>
        </div>
        <div className="top-right">
          <button
            onClick={() => {
              display === "top-list"
                ? setDisplay("hidden")
                : setDisplay("top-list");
            }}
          >
            <i className="fa-solid fa-bars dropdown"></i>
          </button>
        </div>
      </div>

      <ul className={display}>
        {props.list.map((e, key) => {
          return (
            <li className="top-list-item" key={key}>
              <a href={e.url} className="inherit">
                {e.name}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function DestkopTopbar(props: { list: Array<Item> }) {
  return (
    <div className="top">
      <div className="top-left">
        <a href="https://github.com/PTFOPlayer/">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="top-center">
        <ul className="top-list">
          {props.list.map((e, key) => {
            return (
              <li className="top-list-item" key={key}>
                <a href={e.url} className="inherit">
                  {e.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="top-right">
        <ul className="top-list">
          <a className="bmc" href="https://www.buymeacoffee.com/WhiskyAKM">
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
        </ul>
      </div>
    </div>
  );
}
