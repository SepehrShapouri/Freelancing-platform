import React from "react";
import ProjectTable from "../features/projects/ProjectTable";

function Projects() {
  return (
    <div className="w-full h-full max-h-[1024px] bg-gradient-to-br from-sky-100 to-white p-4 dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-700">
      <ProjectTable />
    </div>
  );
}

export default Projects;
