import * as React from "react";
import "./description.scss"

export default function Description() {

  return (
    <div className="description">
      <h1> Hi, I'm Patryk </h1>
      <p> I'm <p className="dev">full-stack</p> developer from Poland.
        <br /><br />
        I'm using
        <p className="react"><i className="fa-brands fa-react"></i>React</p>
        and
        <p className="sass"><i className="fab fa-sass"></i> Sass</p>
        to make frontend, for database I prefer
        <p className="mongodb"><i className="fas fa-database"></i>MongoDB</p>
        as database. I can program in
        <p className="rust"><i className='fab fa-rust' />Rust </p>,
        <p className="cpp">C++</p>,
        <p className="js"><i className="fa-brands fa-js" /> Javascript</p> and <p className="python"><i className="fa-brands fa-python" />Python</p>.
        <br /><br />
        I'm using
        <p className="manjaro">Manjaro</p>
        as my main operating system, and I generaly prefer
        <p className="linux"><i className="fab fa-linux"></i>Linux</p>
        based systems over
        <p className="windows"><i className="fa-brands fa-windows"></i>Windows</p>
        , but I have no problem with using it too, in fact I'm using it for gaming. 
      </p>
    </div>);
}