import * as React from "react";
import "./description.scss";
import "../../../assets/langs.scss";

export default function Description() {
  const [isWindowsGlitch, setWindowsGlitch] = React.useState(false);

  return (
    <div className="description">
      <h1> Hi, I'm Patryk </h1>
      <img
        src="https://avatars.githubusercontent.com/u/35374730?v=4"
        alt=""
        loading="lazy"
      />
      <p>
        {" "}
        I'm
        <p className="dev"> full-stack </p>
        developer from Poland.
        <br /> <br />
        I'm using
        <p className="react">
          <i className="fa-brands fa-react" />
          React
        </p>
        and
        <p className="sass">
          <i className="fab fa-sass" />
          Scss
        </p>
        to make frontend, for database I prefer
        <p className="mongodb">
          <i className="fas fa-database" />
          MongoDB
        </p>
        . I can program in
        <p className="rust">
          <i className="fab fa-rust" />
          Rust
        </p>
        ,<p className="cpp">C++</p>,
        <p className="js">
          <i className="fa-brands fa-js" />
          Javascript
        </p>
        ,<p className="ts">Typescript</p>
        and
        <p className="python">
          <i className="fa-brands fa-python" />
          Python
        </p>
        .
        <br /> <br />
        I'm using
        <p className="fedora">Fedora</p>
        as my main operating system and I generaly prefer
        <p className="linux">
          <i className="fab fa-linux" />
          Linux
        </p>
        based systems over
        <p
          className="windows"
          onMouseEnter={() => {
            setWindowsGlitch(true);
          }}
          onMouseLeave={() => {
            setWindowsGlitch(false);
          }}
        >
          {isWindowsGlitch ? (
            <>
              <i className="fa-brands fa-windows glitch" />
              <span className="glitch">Windows</span>
            </>
          ) : (
            <>
              <i className="fa-brands fa-windows" />
              Windows
            </>
          )}
        </p>
        , but I have no problem with using it too, in fact I'm using it for
        gaming.
      </p>
    </div>
  );
}
