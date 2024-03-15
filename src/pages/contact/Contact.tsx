import React, { useState } from "react";
import "./contact.scss";
export default function Contact() {
  return (
    <div className="contact">
      <div className="segment">
        <h1>Instagram</h1>
        <div className="row">
          <a href="https://www.instagram.com/whisky_code/">
            <img
              src={require("../../assets/insta.png")}
              alt=""
              loading="lazy"
            />
          </a>
          <p>
            That's my public instagram where i don't post much but I give it
            publicly as contact option.
          </p>
        </div>
      </div>
      <div className="segment">
        <h1>Github</h1>
        <div className="row">
          <a href="https://github.com/PTFOPlayer">
            <img
              src="https://avatars.githubusercontent.com/u/35374730?v=4"
              alt=""
              loading="lazy"
            />
          </a>
          <p>
            Most of my projects are there, some are public and some are not. you
            can inspect my code there and see my work.
          </p>
        </div>
      </div>
      <div className="segment">
        <h1>Gmail</h1>
        <div className="row">
          <a href="https://mail.google.com">
            <img
              src={require("../../assets/Gmail.avif")}
              alt="patrykcoding@gmail.com"
              loading="lazy"
            />
          </a>
          <p>
            My gmail is: patrykcoding@gmail.com. If you want to contact me that
            is probably the quickest way
          </p>
        </div>
      </div>
      <Form />
    </div>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="segment">
      <form method="post" action="mailto:patrykcoding@gmail.com">
        <div className="columns">
          <div className="left">
            <label>Name:</label>
            <label>Mail:</label>
          </div>
          <div className="right">
            <input
              type="text"
              name="Name"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              name="email"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            />
          </div>
        </div>
        <div className="content">
          <label>Content:</label>
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
          <input type="reset" value="Reset" />
        </div>
      </form>

      <div className="buttons">
        <button
          onClick={() => {
            localStorage.setItem("name", name);
            localStorage.setItem("mail", mail);
            localStorage.setItem("content", content);
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            setName(localStorage.getItem("name"));
            setMail(localStorage.getItem("mail"));
            setContent(localStorage.getItem("content"));
          }}
        >
          Load Last
        </button>
        <button
          onClick={() => {
            localStorage.setItem("name", "");
            localStorage.setItem("mail", "");
            localStorage.setItem("content", "");
          }}
        >
          Clear Last
        </button>
      </div>
    </div>
  );
}
