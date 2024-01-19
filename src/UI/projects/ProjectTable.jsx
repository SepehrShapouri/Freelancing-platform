import React, { useState } from "react";
import Loader from "../Loader";
import useOwnerProjects from "../../features/projects/projectsHooks/useOwnerProjects";
import { ProjectTableView } from "./ProjectTableView";
import Empty from "../Empty";
import AddProjectBtn from "./AddProjectBtn";
import AddProject from "../../features/projects/AddProject";
function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  const [isFormOpen, setIsFormOpen] = useState(false);
  if (isLoading) return <Loader />;
  return (
    <div className="flex flex-col w-full gap-y-12  h-full max-h-[1024px] items-center">
      <div className="flex justify-between items-center mt-4 w-full  overflow-auto sm:px-20 ">
        {projects.length < 1 ? (
          <Empty resourceName="پروژه" />
        ) : (
          <h2 className="text-cyan-800 text-xl sm:text-2xl font-bold">
            پروژه های شما
          </h2>
        )}
          <AddProjectBtn />
      </div>
      {projects.length ? <ProjectTableView/> : null}
    </div>
  );
}

export default ProjectTable;
