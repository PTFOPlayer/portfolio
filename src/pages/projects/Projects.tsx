import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectsData from "../../assets/projects.json";
import ToolColor from "../../scripts/toolsColor";
import "./projects.scss";
import "../../styles/langs.scss";

// ============ Types ============
interface ElementData {
  title: string;
  tools: string[];
  description: string;
  link: string;
}

// ============ Project Card Component ============
function ProjectCard(element: ElementData) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      className="project-card"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <div className="project-content">
        <div className="project-header">
          {element.title && <h3>{element.title}</h3>}
          {element.tools && (
            <ul className="project-tools">
              {ToolColor.tools(element.tools)}
            </ul>
          )}
        </div>
        {element.description && (
          <p className="project-description">{element.description}</p>
        )}
        {element.link && (
          <a
            href={element.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${element.title} project (opens in new tab)`}
          >
            View Project <i className="fas fa-external-link-alt" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

// ============ Projects Page ============
export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const data = projectsData.projects;

  return (
    <section className="projects-section" ref={ref}>
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Things I've built and worked on</p>
      </div>

      <div className="projects-badge">
        <img
          className="langs"
          src="https://camo.githubusercontent.com/f7ab5c21b6d8bf06b0f599795942a9a65779c4735d198390eb2c5129bd91cd3f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d5054464f706c61796572266c61796f75743d636f6d70616374267468656d653d7261646963616c266c616e67735f636f756e743d38"
          alt="Top Languages"
          loading="lazy"
        />
      </div>

      <motion.div
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {data.map((project: any) => (
          <ProjectCard key={project.title} {...(project as ElementData)} />
        ))}
      </motion.div>
    </section>
  );
}
