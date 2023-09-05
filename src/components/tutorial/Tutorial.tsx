import React from "react";
import './tutorial.scss';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'


export function Title(props: { children: string }) {
  return (
    <h1 className="tutorialh1">{props.children}</h1>
  )
}

export function HeadlineBig(props: { children: string }) {
  return (
    <h2 className="tutorialh2">{props.children}</h2>
  )
}

export function HeadlineSmall(props: { children: string }) {
  return (
    <h3 className="tutorialh3">{props.children}</h3>
  )
}

export function Paragraph(props: { children: string }) {
  return (
    <p className="tutorialp">{props.children}</p>
  )
}

export function Note(props: { children: string }) {
  return (
    <p className="tutorialnote">{"-> " + props.children}</p>
  )
}

export function Table(props: { table: {} }) {
  return (<></>)
}

export function List(props: { list: {} }) {
  return (<></>)
}

interface code_from_str {
  lang: string,
  code: string
}

export function CodeBlock(props: { children: string }) {
  let data: code_from_str;
  try {

    data = JSON.parse(props.children) as code_from_str;
  } catch {
    data = { lang: "js", code: "lorem" };
  }
  let text = data.code.split("\n");

  console.log(data.code)
  return (<div className="codeblock">
    <h3>{data.lang}</h3>
    <div className="code">
      {
        text.map((e) => {
          const code = Prism.highlight(e, Prism.languages.js, data.lang);
          return (<div dangerouslySetInnerHTML={{ __html: code }}></div>)
        })
      }
    </div>
  </div>)
}