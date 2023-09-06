import { getProjectFromID } from "@/app/utils/statics";

const ProjectWithID = ({ params }: { params: { id: string } }) => {
  const projectID = params.id;
  let project = getProjectFromID(projectID);
  return <div>{JSON.stringify(project)}</div>;
};

export default ProjectWithID;
