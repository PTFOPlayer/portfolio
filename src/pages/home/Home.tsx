import * as React from "react";
import "./home.scss";

import Description from "../../components/home/description/Description";
import Toolset from "../../components/home/toolset/Toolset";
import Os from "../../components/home/os/Os";
import Career from "../../components/home/career/Career";
export default function Home() {
  return (
    <div className="home">
      <Description />
      <Toolset />
      <Os />
      {/* <Career /> */}
    </div>
  );
}
