import React from "react";

export function Title(props: { title: string }) {
  return (
      <h1>{props.title}</h1>
  )
}

export function HeadlineBig(props: { headline: string }) {
  return (
      <h2>{props.headline}</h2>
  )
}

export function HeadlineSmall(props: { headline: string }) {
  return (
    <h3>{props.headline}</h3>
  )
}

export function Paragraph(props: { paragraph: string }) {
  return (
      <p>{props.paragraph}</p>
  )
}

export function Note(props: { note: string }) {
  return (
    <p>{props.note}</p>
  ) 
}

export function Table(props: { table: {} }) {
  return (<></>)
}

export function List(props: { list: {} }) {
  return (<></>)
}