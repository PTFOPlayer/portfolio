import React from "react"
import "./contact.scss"
export default function Contact() {
  return (
    <div className="contact">
      <div className="segment">
        <h1>Instagram</h1>
        <div className="row">
          <img src={require("../../assets/insta.png")} alt="" loading="lazy"/>
          <p>That's my public instagram where i don't post much but I give it publicly as contact option.</p>
        </div>
      </div>
      <div className="segment">
        <h1>Github</h1>
        <div className="row">
          <a href="https://github.com/PTFOPlayer"><img src="https://avatars.githubusercontent.com/u/35374730?v=4" alt="" loading="lazy"/></a>
          <p>Most of my projects are there, some are public and some are not. you can inspect my code there and see my work.</p>
        </div>
      </div>
      <div className="segment">
        <h1>Gmail</h1>
        <div className="row">
          <img  src={require("../../assets/Gmail.avif")} alt="patrykcoding@gmail.com" loading="lazy"/>
          <p>My gmail is: patrykcoding@gmail.com. If you want to contact me that is probably the quickest way</p>
        </div>
      </div>
    </div>
  )
}