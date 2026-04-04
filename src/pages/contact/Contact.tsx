import "./contact.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import instaImage from "../../assets/insta.png";
import gmailImage from "../../assets/Gmail.avif";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true });

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

  const contacts = [
    {
      title: "GitHub",
      icon: "fab fa-github",
      link: "https://github.com/PTFOPlayer",
      image: "https://avatars.githubusercontent.com/u/35374730?v=4",
      description: "Most of my projects are here. Some are public, some are private. You can inspect my code and see my work.",
      color: "#333",
    },
    {
      title: "Gmail",
      icon: "fas fa-envelope",
      link: "mailto:patrykcoding@gmail.com",
      image: gmailImage,
      description: "patrykcoding@gmail.com — The quickest way to reach me for direct communication.",
      color: "#ea4335",
    },
    {
      title: "Instagram",
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/whisky_code/",
      image: instaImage,
      description: "My public Instagram where I occasionally post. Another way to get in touch.",
      color: "#e4405f",
    },
  ];

  return (
    <section className="contact-section" ref={ref}>
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Feel free to reach out through any of these channels</p>
      </div>

      <motion.div
        className="contact-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {contacts.map((contact) => (
          <motion.a
            key={contact.title}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            style={{ "--accent-color": contact.color } as React.CSSProperties}
            aria-label={`Contact via ${contact.title} (opens in new tab)`}
          >
            <div className="contact-icon">
              <i className={contact.icon} />
            </div>
            <div className="contact-info">
              <h3>{contact.title}</h3>
              <p>{contact.description}</p>
            </div>
            <div className="contact-arrow">
              <i className="fas fa-arrow-right" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
