import React, { useState } from "react";
import toolColor from "../../../scripts/toolsColor";
import "./offer.scss";

import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";

export default function Offer() {
  return (
    <>
      <h2> korki / szkolenie </h2>
      <p>
        Oferuję korepetycje, doszkalanie oraz naukę programowania, obsługi
        systemu Linux oraz innych rzeczy związanych z dziedzinami informatyki.{" "}
      </p>
      <h3>Oferuje naukę programowania w językach:</h3>
      <ul className="lang_list">
        <li> {toolColor.tool("rust")} </li>
        <li> {toolColor.tool("C")} </li>
        <li> {toolColor.tool("C++")} </li>
        <li> {toolColor.tool("Python")} </li>
        <li> {toolColor.tool("javascript")} </li>
      </ul>
      <h3>Naukę użytkowania wielu dystrybucji Linuxa, między innymi:</h3>
      <ul className="lang_list">
        <li>
          {" "}
          <p className="manjaro">Manjaro (rodzina arch)</p>{" "}
        </li>
        <li>
          {" "}
          <p className="ubuntu">Ubuntu (rodzina debiana)</p>{" "}
        </li>
        <li>
          {" "}
          <p className="fedora">Fedora (rodzina RHEL)</p>{" "}
        </li>
      </ul>
      <Form></Form>
    </>
  );
}

function Form() {
  const langs = ["rust", "C", "C++", "Python", "javascript"];

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [lang, setLang] = useState("");
  const [content, setContent] = useState("");
  const [sex, setSex] = useState("");

  return (
    <div className="segment">
      <form method="post" action="mailto:patrykcoding@gmail.com">
        <label>
          <h1>Ankieta</h1>
        </label>
        <fieldset>
          <div className="columns">
            <div className="left">
              <label>Name:</label>
              <label>Mail:</label>
            </div>
            <div className="right">
              <label></label>
              <input
                type="text"
                name="Name"
                id="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}"
              />
            </div>
          </div>
          <label>Płeć</label>
          <input
            list="list"
            id="listinput"
            style={{ height: "3vh" }}
            value={sex}
            onChange={(e) => {
              setSex(e.target.value);
            }}
          />
          <datalist id="list">
            <option value="Man" />
            <option value="Woman" />
            <option value="Other" />
            <option value="Internet Explorer" />
          </datalist>
        </fieldset>
        <fieldset className="langQuery">
          <label>Preferowany język</label>
          {langs.map((e, key) => {
            return (
              <div className="langQ" key={key}>
                <input
                  type="radio"
                  name="lang"
                  checked={lang === e}
                  onChange={() => setLang(e)}
                />
                {toolColor.tool(e)}
              </div>
            );
          })}
        </fieldset>
        <div className="content">
          <label>Uwagi:</label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            cols={30}
            rows={10}
          />
        </div>
        <div className="buttons">
          <input type="submit" value="Submit" />
          <input
            type="reset"
            value="Reset"
            onClick={() => {
              setName("");
              setMail("");
              setSex("");
              setLang("");
              setContent("");
            }}
          />
        </div>
      </form>

      <div className="buttons">
        <button
          onClick={() => {
            localStorage.setItem("name", name);
            localStorage.setItem("mail", mail);
            localStorage.setItem("lang", lang);
            localStorage.setItem("sex", sex);
            localStorage.setItem("content", content);
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            setName(localStorage.getItem("name"));
            setMail(localStorage.getItem("mail"));
            setSex(localStorage.getItem("sex"));
            setLang(localStorage.getItem("lang"));
            setContent(localStorage.getItem("content"));
          }}
        >
          Load Last
        </button>
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          Clear Last
        </button>
      </div>
    </div>
  );
}
