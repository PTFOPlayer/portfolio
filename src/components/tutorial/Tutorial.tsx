import React from "react";
import './tutorial.scss';
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
    <p className="tutorialnote">{props.children}</p>
  ) 
}

export function Table(props: { table: {} }) {
  return (<></>)
}

export function List(props: { list: {} }) {
  return (<></>)
}