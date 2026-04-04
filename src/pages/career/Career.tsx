import "./career.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../../assets/career.json";

export default function Career() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="career-section" ref={ref}>
      <div className="career-header">
        <h1>My Career</h1>
        <p>Professional journey and work experience</p>
      </div>

      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {data.map((item, index) => (
          <motion.div
            key={item.title}
            className="timeline-item"
            variants={cardVariants}
          >
            <div className="timeline-marker">
              <div className="timeline-dot" />
              {index < data.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{item.title}</h3>
                <span className="timeline-date">
                  {item.years.beginning} — {item.years.end}
                </span>
              </div>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}