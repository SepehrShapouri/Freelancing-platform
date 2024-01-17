import React, { useState } from "react";
import Loader from "./Loader";
import useOwnerProjects from "../features/projects/projectsHooks/useOwnerProjects";
import { IoAddCircle } from "react-icons/io5";
import { ProjectTableView } from "./projects/ProjectTableView";
function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  return (
    <div className="h-full w-full flex max-h-[1024px]">
      {isLoading ? (
        <span className="mb-[120px]">
          <Loader />
        </span>
      ) : projects.length < 1 ? (
        <div className="p-12 w-full flex justify-between h-[40px] items-center">
          <p className="text-2xl font-bold text-cyan-800">
            پروژه فعال یافت نشد!
          </p>
          <button className="flex items-center  bg-cyan-800 text-white px-4 h-[40px] py-2 justify-between w-[120px] sm:w-[150px] sm:text-lg text-sm rounded-xl hover:bg-cyan-600 transition-all">
            پروژه جدید <IoAddCircle />{" "}
          </button>
        </div>
      ) : (
        <ProjectTableView />
      )}
    </div>
  );
}

export default ProjectTable;
