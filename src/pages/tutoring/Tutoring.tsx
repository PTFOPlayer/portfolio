import React from "react";
import "./tutoring.scss"
import Offer from "../../components/tutoring/offer/Offer";
export default function Tutoring() {
  return (
    <div className="tutoring">
      <h1>Only in polish!</h1>
      <h2> kursy </h2>

      <ul className="courses_list">
        <li><a href='/#/tutoring' className="inherit">Cooming soon</a></li>
      </ul>

      <Offer />
    </div>
  )
}