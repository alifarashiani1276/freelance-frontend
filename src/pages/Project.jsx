import React from "react";
import useProject from "../features/project/useProject";
import ProjectHeader from "../features/project/ProjectHeader";
import ProposalsTable from "../features/project/ProposalsTable";
import Loading from "../ui/Loading";

function Project() {
  const { isLoading, project } = useProject();

  
  if (isLoading) return <Loading />;

  
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
