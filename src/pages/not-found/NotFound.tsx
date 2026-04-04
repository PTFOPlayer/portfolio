import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./not-found.scss";

export default function NotFound() {
  return (
    <motion.section
      className="not-found-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="home-link">
          <i className="fas fa-home" /> Back to Home
        </Link>
      </div>
    </motion.section>
  );
}