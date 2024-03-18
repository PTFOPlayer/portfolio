import React from "react";
import "./tutorial.scss";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

interface code_from_str {
  lang: string;
  code: string;
}

export function CodeBlock(props: { children: string }) {
  let data: code_from_str;
  try {
    data = JSON.parse(props.children) as code_from_str;
  } catch {
    data = { lang: "js", code: "lorem" };
  }
  let text = data.code.split("\n");

  console.log(data.code);
  return (
    <div className="codeblock">
      <h3>{data.lang}</h3>
      <div className="code">
        {text.map((e) => {
          const code = Prism.highlight(e, Prism.languages.js, data.lang);
          return <div dangerouslySetInnerHTML={{ __html: code }}></div>;
        })}
      </div>
    </div>
  );
}
