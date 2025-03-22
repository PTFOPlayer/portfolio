import React from "react";
import "./tutorials.scss";

export default function Tutorials() {
  const data = [
    ["https://www.patryk.tofil.eu/c_system_book/", "kurs systemu w c"],
    ["https://www.patryk.tofil.eu/systemd_book/", "kurs systemd"],
  ];
  return (
    <div className="tutoring">
      <h2> Courses (in polish): </h2>
      <ul className="courses_list">
        {data.map((x) => (
          
            <a key= {x[1]} href={x[0]} className="inherit">
              <p>{x[1]}</p>
            </a>
        ))}
      </ul>
    </div>
  );
}
