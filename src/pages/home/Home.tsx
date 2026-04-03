import "./home.scss";
import "../../styles/langs.scss";
import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ToolColor from "../../scripts/toolsColor";
import toolsetData from "../../assets/toolset.json";

// ============ Description Component ============
function Description() {
  const [isWindowsGlitch, setWindowsGlitch] = React.useState(false);

  return (
    <div className="description">
      <h1>Hi, I'm Patryk</h1>
      <img
        src="https://avatars.githubusercontent.com/u/35374730?v=4"
        alt="Patryk - Full Stack Developer"
        loading="lazy"
      />
      <p>
        <span className="intro-text">
          I'm a <span className="dev">full-stack developer</span> from Poland, passionate about building robust software and exploring new technologies.
        </span>
        <br /><br />
        <span className="intro-text">
          My expertise lies in <span className="react"><i className="fa-brands fa-react" /> React</span> and <span className="sass"><i className="fab fa-sass" /> SCSS</span> for crafting modern frontends, with <span className="mongodb"><i className="fas fa-database" /> MongoDB</span> as my database of choice for flexible, scalable solutions.
        </span>
        <br /><br />
        <span className="intro-text">
          When it comes to systems programming, I trust <span className="rust"><i className="fab fa-rust" /> Rust</span> for its safety and performance. I'm also proficient in <span className="cpp">C++</span>, <span className="js"><i className="fa-brands fa-js" /> JavaScript</span>, <span className="ts">TypeScript</span>, and <span className="python"><i className="fa-brands fa-python" /> Python</span> - choosing the right tool for each challenge.
        </span>
        <br /><br />
        <span className="intro-text">
          I'm a proud <span className="fedora">Fedora</span> user and Linux enthusiast. While I primarily work with <span className="linux"><i className="fab fa-linux" /> Linux</span> for its power and flexibility, I can also work with <span
            className="windows"
            onMouseEnter={() => setWindowsGlitch(true)}
            onMouseLeave={() => setWindowsGlitch(false)}
          >
            {isWindowsGlitch ? (
              <>
                <i className="fa-brands fa-windows glitch" />
                <span className="glitch">Windows</span>
              </>
            ) : (
              <>
                <i className="fa-brands fa-windows" />
                <span>Windows</span>
              </>
            )}
          </span> when needed.
        </span>
      </p>
    </div>
  );
}

// ============ Toolset Component ============
function Toolset() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="toolset" ref={ref}>
      <div className="toolset-header">
        <h2>Tech Stack</h2>
        <p>Technologies I work with and why I chose them</p>
      </div>
      <motion.div
        className="toolset-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {toolsetData.tools.map((item: any) => (
          <motion.div
            key={Array.isArray(item.tool) ? item.tool.join("-") : item.tool}
            className="tool-card"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="tool-card-header">
              {Array.isArray(item.tool) ? (
                <div className="tool-icons">{ToolColor.tools(item.tool)}</div>
              ) : (
                <div className="tool-icon-single">{ToolColor.tool(item.tool)}</div>
              )}
            </div>
            <p className="tool-description">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ============ Os Component ============
function Os() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [hoveredOs, setHoveredOs] = React.useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const osOptions = [
    {
      name: "Linux",
      icon: "fab fa-linux",
      highlight: true,
      points: [
        "Rock-solid stability - no random blue screens",
        "Full control over your system",
        "Native development environment",
        "Vast package repositories",
        "Privacy and transparency",
      ],
    },
    {
      name: "Windows",
      icon: "fa-brands fa-windows",
      highlight: false,
      points: [
        "Gaming compatibility",
        "Hardware vendor support",
        "Familiar interface",
        "Enterprise integration",
        "Proprietary software support",
      ],
    },
  ];

  return (
    <section className="os-section" ref={ref}>
      <div className="os-header">
        <h2>Why Linux?</h2>
        <p>My operating system philosophy and daily driver</p>
      </div>

      <motion.div
        className="os-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {osOptions.map((os) => (
          <motion.div
            key={os.name}
            className={`os-card ${os.highlight ? "highlighted" : ""}`}
            variants={cardVariants}
            onHoverStart={() => setHoveredOs(os.name)}
            onHoverEnd={() => setHoveredOs(null)}
            whileHover={{ y: -5 }}
          >
            <div className="os-card-header">
              <i className={`${os.icon} ${hoveredOs === os.name && os.highlight ? "bounce" : ""}`} />
              <h3>{os.name}</h3>
              {os.highlight && <span className="badge">Daily Driver</span>}
            </div>
            <ul className="os-points">
              {os.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="distro-choice"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="distro-content">
          <div className="distro-icon">
            <i className="fab fa-fedora" />
          </div>
          <div className="distro-text">
            <h3>Fedora</h3>
            <p>
              My distro of choice for its cutting-edge packages, excellent hardware support, and seamless
              Wayland integration. DNF's Delta RPM saves bandwidth on updates, and the large repository
              means I rarely need third-party sources.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ============ Home Page ============
export default function Home() {
  return (
    <div className="home">
      <Description />
      <Toolset />
      <Os />
    </div>
  );
}
