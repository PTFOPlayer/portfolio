import "./topbar.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";

interface Item {
  name: string;
  url: string;
}

export default function Topbar() {
  const location = useLocation();
  let list: Array<Item> = [
    { url: "/", name: "Home" },
    { url: "/projects", name: "Projects" },
    { url: "/career", name: "Career" },
    { url: "/contact", name: "Contact" },
    { url: "/tutorials", name: "Courses" },
  ];
  const [display, setDisplay] = useState("hidden");
  const isOpen = display === "top-list";
  
  let handle_click = () => {
    setDisplay(isOpen ? "hidden" : "top-list");
  };

  return (
    <nav className="topbar-wrapper" aria-label="Main navigation">
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
            currentPath={location.pathname}
          />
        </div>
        <div className="top-right">
          <button 
            onClick={handle_click} 
            className="hiddenOnDesktop"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="main-menu"
          >
            <i className="fa-solid fa-bars dropdown"></i>
          </button>
        </div>
      </div>
      <TopList 
        list={list} 
        display={display} 
        onItemClick={() => setDisplay("hidden")}
        currentPath={location.pathname}
        isMobileMenu
      />
    </nav>
  );
}

function Gh(props: { className?: string }) {
  return (
    <a 
      href="https://github.com/PTFOPlayer/" 
      className={props.className}
      aria-label="Visit GitHub profile (opens in new tab)"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-github"></i>
    </a>
  );
}
function TopList(props: {
  list: Array<Item>;
  display: string;
  className?: string;
  onItemClick?: () => void;
  currentPath?: string;
  isMobileMenu?: boolean;
}) {
  const isOpen = props.display === "top-list";
  return (
    <ul 
      className={props.display + " " + props.className}
      id={props.isMobileMenu ? "main-menu" : undefined}
      aria-hidden={props.isMobileMenu ? !isOpen : undefined}
    >
      {props.list.map((e) => {
        const isActive = props.currentPath === e.url;
        return (
          <li className="top-list-item" key={e.url}>
            <a 
              href={e.url} 
              className="inherit" 
              onClick={props.onItemClick}
              aria-current={isActive ? "page" : undefined}
            >
              {e.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
