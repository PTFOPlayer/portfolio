import * as React from "react";
import "./home.scss";

import Description from "../../components/home/description/Description";
import PostsList from "../../components/home/postsList/PostsList";
import Toolset from "../../components/home/toolset/Toolset";
import Os from "../../components/home/os/Os";
export default function Home() {
  return (
    <div className="home">
      <Description/>
      <PostsList/>
      <Toolset/>
      <Os/>
    </div>
  );
}
