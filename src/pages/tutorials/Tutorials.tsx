import "./tutorials.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Tutorials() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const courses = [
    {
      title: "C System Course",
      description: "Comprehensive guide to systems programming in C",
      url: "https://www.patryk.tofil.eu/c_system_book/",
      icon: "fas fa-microchip",
    },
    {
      title: "Systemd Course",
      description: "Learn systemd service management and configuration",
      url: "https://www.patryk.tofil.eu/systemd_book/",
      icon: "fas fa-cogs",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section className="tutorials-section" ref={ref}>
      <div className="tutorials-header">
        <h2>Tutorials</h2>
        <p>Free educational content (in Polish)</p>
      </div>

      <motion.div
        className="tutorials-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {courses.map((course) => (
          <motion.a
            key={course.title}
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tutorial-card"
            variants={cardVariants}
            whileHover={{ y: -8 }}
          >
            <div className="tutorial-icon">
              <i className={course.icon} />
            </div>
            <div className="tutorial-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
            <div className="tutorial-arrow">
              <i className="fas fa-external-link-alt" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
