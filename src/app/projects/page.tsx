import { personalProjects } from "../utils/statics";

const Projects = () => {
  let liveProjects = personalProjects.lives;
  return (
    <div>
      {liveProjects.map((proj) => (
        <>
          <div>{proj.title}</div>
          <div>{proj.details}</div>
          <div>{proj.usefullFor}</div>
          {/* <div>{proj.githubLink}</div> */}
        </>
      ))}
    </div>
  );
};

export default Projects;
