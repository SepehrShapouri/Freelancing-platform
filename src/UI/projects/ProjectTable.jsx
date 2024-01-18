import React, { useState } from "react";
import Loader from "../Loader";
import useOwnerProjects from "../../features/projects/projectsHooks/useOwnerProjects";
import { ProjectTableView } from "./ProjectTableView";
import Empty from "../Empty";
import AddProjectBtn from "./AddProjectBtn";
function ProjectTable() {
  const { isLoading } = useOwnerProjects();
  const projects = [
    {
      id: 1,
      title: "1",
      description: "1",
      budget: 1,
      category: { title: "1" },
      status: "OPEN",
      tags: ["javascript", "react", "tailwind"],
    },
  ];
  if (isLoading) return <Loader />;
  if (projects.length < 1)
    return (
      <div className="flex justify-between items-center">
        <Empty resourceName="پروژه" />
        <AddProjectBtn />
      </div>
    );
  return (
    <div className="h-full w-full flex max-h-[1024px]">
      <ProjectTableView />
    </div>
  );
}

export default ProjectTable;
