import { personalProjects } from "../utils/statics";
import styles from "./projects.module.css";

const Projects = () => {
  let liveProjects = personalProjects.lives;
  return (
    <div className={styles.projects}>
      {liveProjects.map((proj) => (
        <article>
          <h1>{proj.title}</h1>
          <div>{proj.details}</div>
          <div>{proj.usefullFor}</div>
          {/* <div>{proj.githubLink}</div> */}
        </article>
      ))}
    </div>
  );
};

export default Projects;
