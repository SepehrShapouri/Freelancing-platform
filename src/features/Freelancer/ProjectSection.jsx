import React from "react";
import { ProjectCard } from "./ProjectCard";
import useAllCategories from "../category/categoryHooks/useAllCategories";
import Select from "react-select";
import { PlaySquareIcon } from "lucide-react";
export function ProjectSection({ projects }) {
  return (
    <div className="flex w-[300px]  h-[200px] lg:w-[800px] rounded-md sm:w-[600px] items-center overflow-x-auto gap-2">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
}

export function SelectDropDown({ options, placeholder, setState }) {
  return (
    <Select 
      options={options}
      placeholder={placeholder}
      onChange={(e) => setState(e.value)}
      isSearchable={false}
      classNames={{
        container:(state)=>"w-full sm:w-[150px]",
        menu: (state) => "dark:bg-slate-600 dark:text-indigo-400 text-cyan-800",
        control: (state) => "dark:bg-slate-600 outline-none",
        dropdownIndicator: (state) => "text-cyan-800 dark:text-indigo-400",
        placeholder: (state) => "text-cyan-800 dark:text-indigo-400",
        singleValue: (state) => "text-cyan-800 dark:text-indigo-400",
        option:(state) => "hover:bg-sky-100 dark:hover:bg-slate-700 dark:bg-slate-600 text-cyan-800 dark:text-indigo-400 bg-white",
      }}
    />
  );
}
