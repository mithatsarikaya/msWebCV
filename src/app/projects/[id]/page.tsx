import { getProjectFromID } from "@/app/utils/statics";
import TitleProjectWithLinks from "../components/TitleProjectWithLinks/TitleProjectWithLinks";
import style from "./projectsID.module.css";

const ProjectWithID = ({ params }: { params: { id: string } }) => {
  const projectID = params.id;
  let notShowKeys = [
    "id",
    "title",
    "oneLineDescription",
    "possibleDelay",
    "githubLink",
    "url",
    ,
    "techStack",
  ];

  let project = getProjectFromID(projectID);
  return (
    <div>
      {project && (
        <>
          <TitleProjectWithLinks
            githubLink={project?.githubLink}
            projID={project?.id}
            title={project?.title}
            key={project?.id}
            liveUrl={project?.url}
            locateToProjectDetails={false}
          />
          {Object.keys(project)
            .filter((k) => !notShowKeys.includes(k))
            .map((objKey) => (
              <div
                // className={style.detailsDiv}
                key={objKey}
              >
                <label style={{ color: "red" }} htmlFor="">
                  {objKey}
                </label>
                <p>{project && project[objKey as keyof typeof project]}</p>
              </div>
            ))}

          <div>
            <label style={{ color: "red" }} htmlFor="">
              Tech Stack
            </label>
            <p>{project.techStack.join(" ")}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectWithID;

// check the pod v1
// id
// 0
// title
// check the pod v1
// oneLineDescription
// If you cook for more than one meal, then this app will help you to take specific food from the food pod
// usefullFor
// This web app is for someone who cares about calorie intake. When you cook rice and if it is more than one lunch, you need to calculate how much you left on the pod where you put your cooked rice.
// details
// This was my first project. Even if it is publicly accessible, the only way to register is to ask me. This app is for only me and my brother.
// techStack
// JavaScriptEJSNode.jsExpress.jsMongoDbHTMLCSS
// githubLink
// https://github.com/mithatsarikaya/checkthePod
// url
// https://checkthepod.onrender.com/pod
// possibleDelay
