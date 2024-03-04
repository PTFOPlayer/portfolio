import * as React from "react";
import "./career.scss";
import data from "../../assets/career.json";

export default function Career() {
  return (
    <>
      <div className="career">
        <h1>
          My <p className="dev">Career</p>
        </h1>
      </div>
      <div className="careerexp">
        {data.map((e, key) => {
          return (
            <div key={key} className="segment">
              <div className="titledate">
                <h2 className="title">{e.title}</h2>
                <h2 className="date">
                  {e.years.beginning} - {e.years.end}
                </h2>
              </div>
              <div>{e.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
