import React from "react";
import useOwnerProjects from "../features/projects/projectsHooks/useOwnerProjects";
import ProjectTable from "../UI/projects/ProjectTable";

function Projects() {
  return (
    <div className="w-full h-full max-h-[1024px] bg-gradient-to-br from-sky-100 to-white p-4 ">
      <ProjectTable />
    </div>
  );
}

export default Projects;
