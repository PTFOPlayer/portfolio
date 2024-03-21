import React, { useEffect, useState } from "react";
import "./tutorials.scss";
import { ShortPost } from "./Tutorials.d";
export default function TutorialsComponent() {
  const [posts, setPosts] = useState<Array<ShortPost> | undefined>();
  useEffect(() => {
    fetch("https://www.patryk.tofil.eu/backend/api/get_posts_short")
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1>Only in polish!</h1>
      <h2> kursy </h2>
      <ul className="courses_list">
        {posts
          ? posts.map((e, key) => (
              <li key={key}>
                <a href={"/#/tutorials/" + e.post_id} className="inherit">
                  <p>{e.post_short_name}</p>
                </a>
              </li>
            ))
          : null}
      </ul>
    </>
  );
}
