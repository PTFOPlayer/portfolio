import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import toolsColor from "../../../scripts/toolsColor";
import "./post.scss";
import { ElementData } from "../posts/Posts.d";

export default function Post(element: ElementData) {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    hidden: { opacity: 0, scale: 0 },
  };

  React.useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  let image = element.image
    ? element.image
    : "https://avatars.githubusercontent.com/u/35374730?v=4";
  return (
    <>
      <div className="post">
        <motion.img
          src={image}
          alt="img not found"
          loading="lazy"
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={control}
        />
        <div className="content">
          <div className="titleBar">
            {element.title ? <h1>{element.title}</h1> : null}
            {element.tools ? (
              <motion.ul
                ref={ref}
                variants={variants}
                initial="hidden"
                animate={control}
              >
                {toolsColor.tools(element.tools)}
              </motion.ul>
            ) : null}
          </div>
          <div className="projectDescription">
            {element.description ? (
              <>
                <h3>Description:</h3>
                <p>{element.description}</p>
              </>
            ) : null}
            {element.link ? <a href={element.link}>{element.link}</a> : null}
          </div>
        </div>
      </div>
    </>
  );
}
