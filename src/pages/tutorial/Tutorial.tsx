import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Paragraph, Title } from '../../components/tutorial/Tutorial';

import './tutorial.scss';

interface Element {
  name: string;
  element: number;
  text: string;
  type: string;
}

function resolver(element: Element) {
  let type = element.type;
  switch (type) {
    case "paragraph":
    case "text":
      return (<Paragraph>{element.text}</Paragraph>)
    case "title":
      return (<Title>{element.text}</Title>)
    default:
      return null

  }
}

export default function Tutorial() {
  let location = useLocation();
  let id = location.pathname.split('/')[2];

  let [data, setData] = useState<Array<Element> | null>(null);


  useEffect(() => {

    fetch("http://localhost:2223/api/post_content/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      }).catch((err) => {
        console.error(err);
        setData(null);
      });
  }, [id]);

  return (
    <div className="tutorial">
      {
        data ? data.map((element, key) => <div key={key}>{resolver(element)}</div>) : null
      }
    </div>
  )
}