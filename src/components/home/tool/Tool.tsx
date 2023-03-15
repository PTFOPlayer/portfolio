import React from "react";
import toolsColor from "../../../scripts/toolsColor";
import "./tool.scss"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Tool(e:any) {
  const control = useAnimation()
  const [ref, inView] = useInView()
  const variants = {
    visible: {opacity: 1, scale: 1, transition: {duration: 0.7} },
    hidden: {opacity: 0, scale: 0,},
  }
  React.useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden")
    }
  }, [control, inView]);
  
  return (
    <div className="tool">
      <motion.div className="content" 
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={control}>
        <div className="title">
          {typeof e.tool === "object" ? 
          <h3>{toolsColor.tools(e.tool)}</h3> :
          <h1>{toolsColor.tool(e.tool)}</h1>}
        </div>
        {e.description ? <span>{e.description}</span> : null}
      </motion.div>
    </div>
  )
}