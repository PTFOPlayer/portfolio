import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { MDPost } from "./Tutorial.d";
import remarkGfm from 'remark-gfm'

import "./tutorial.scss";
import axios from "axios";

export default function Tutorial() {
  let location = useLocation();
  let id = location.pathname.split("/")[2];

  const [post, setPost] = useState<MDPost>();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("https://www.patryk.tofil.eu/backend/api/get_post/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res[0]);
        setPost(res[0]);
      })
      .catch((err) => {
        console.error(err);
        setPost(undefined);
      });
  }, [id]);

  if (post) {
    axios
      .get(post.post_url, {
        withCredentials: false,
      })
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setContent(res);
      })
      .catch((err) => {
        console.error(err);
        setContent("");
      });
  }

  return (
    <div className="tutorial">
      <div style={{"width": "80%"}}>

      <ReactMarkdown children={content} rehypePlugins={[remarkGfm]}></ReactMarkdown>
      </div>
      
    </div>
  );
}
