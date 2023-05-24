import React from "react";
import "./tutoring.scss"
import Offer from "../../components/tutoring/offer/Offer";
import Tutorials from "../../components/tutoring/tutorials/Tutorials";
export default function Tutoring() {
  return (
    <div className="tutoring">
      <Tutorials />
      <Offer />
    </div>
  )
}