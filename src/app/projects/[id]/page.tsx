import { getProjectFromID } from "@/app/utils/statics";
import TitleProjectWithLinks from "../components/TitleProjectWithLinks/TitleProjectWithLinks";
import style from "./projectsID.module.css";
import Image from "next/image";

const ProjectWithID = ({ params }: { params: { id: string } }) => {
  const projectID = params.id;
  let showKeys = ["usefullFor", "details"];

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
            .filter((k) => showKeys.includes(k))
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
      {project?.pictureSrc && (
        <Image
          src={project?.pictureSrc}
          alt="project picture"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "80%",
            height: "auto",
            marginTop: "2rem",
            border: "solid 1px salmon",
          }}
        />
      )}
    </div>
  );
};

export default ProjectWithID;
