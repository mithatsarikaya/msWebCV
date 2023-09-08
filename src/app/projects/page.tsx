import { personalProjects } from "../utils/statics";
import TitleProjectWithLinks from "./components/TitleProjectWithLinks/TitleProjectWithLinks";
import styles from "./projects.module.css";

const Projects = () => {
  let liveProjects = personalProjects.lives;
  return (
    <div className={styles.projects}>
      {liveProjects.map((proj) => (
        <article>
          <TitleProjectWithLinks
            key={proj.id}
            title={proj.title}
            githubLink={proj.githubLink}
            liveUrl={proj.url}
          />
          <span>{proj.usefullFor}</span>
        </article>
      ))}
    </div>
  );
};

export default Projects;
