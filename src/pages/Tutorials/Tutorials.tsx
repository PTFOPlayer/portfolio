import React from "react";
import "./tutorials.scss"
import Offer from "../../components/tutorials/offer/Offer";
import TutorialsComponent from "../../components/tutorials/tutorials/Tutorials";
export default function Tutorials() {
  return (
    <div className="tutoring">
      <TutorialsComponent />
      <Offer />
    </div>
  )
}