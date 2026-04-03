import "./topbar.scss";
import { useState } from "react";

interface Item {
  name: string;
  url: string;
}

export default function Topbar() {
  let list: Array<Item> = [
    { url: "/", name: "Home" },
    { url: "/projects", name: "Projects" },
    { url: "/career", name: "Career" },
    { url: "/contact", name: "Contact" },
    { url: "/tutorials", name: "Courses" },
  ];
  const [display, setDisplay] = useState("hidden");
  let handle_click = () => {
    display === "top-list" ? setDisplay("hidden") : setDisplay("top-list");
  };

  return (
    <>
      <div className="top">
        <div className="top-left">
          <Gh className="hiddenOnMobile" />
        </div>
        <div className="top-center">
          <Gh className="hiddenOnDesktop" />
          <TopList
            list={list}
            display={"top-list"}
            className="hiddenOnMobile"
          />
        </div>
        <div className="top-right">
          <button onClick={handle_click} className="hiddenOnDesktop">
            <i className="fa-solid fa-bars dropdown"></i>
          </button>
        </div>
      </div>
      <TopList list={list} display={display} />
    </>
  );
}

function Gh(props: { className?: string }) {
  return (
    <a href="https://github.com/PTFOPlayer/" className={props.className}>
      <i className="fab fa-github"></i>
    </a>
  );
}
function TopList(props: {
  list: Array<Item>;
  display: string;
  className?: string;
}) {
  return (
    <ul className={props.display + " " + props.className}>
      {props.list.map((e) => {
        return (
          <li className="top-list-item" key={e.url}>
            <a href={e.url} className="inherit">
              {e.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
