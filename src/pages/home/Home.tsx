import * as React from "react";
import "./home.scss";

import Description from "../../components/description/Description";
import PostsList from "../../components/postsList/PostsList";

export default function Home() {
  return (
    <div className="home">
      <Description/>
      <PostsList/>
    </div>
  );
}
