import React from "react";
import "./tutorials.scss"
import Offer from "../../components/tutoring/offer/Offer";
import TutorialsComponent from "../../components/tutoring/tutorials/Tutorials";
export default function Tutorials() {
  return (
    <div className="tutoring">
      <TutorialsComponent />
      <Offer />
    </div>
  )
}