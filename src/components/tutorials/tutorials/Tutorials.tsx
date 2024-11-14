import React from "react";
import "./tutorials.scss";
export default function TutorialsComponent() {
  const data = [
    ["https://www.patryk.tofil.eu/c_system_book/", "kurs systemu w c"],
  ];

  return (
    <>
      <h2> Courses (in polish): </h2>
      <ul className="courses_list">
        {data.map((x) => (
          <li key={x[1]}>
            <a href={x[0]} className="inherit">
              <p>{x[1]}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
