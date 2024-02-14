import React, { useEffect, useState } from "react";
import { useAllProjects } from "../features/projects/projectsHooks/useAllProjects";
import useUser from "../features/authentication/authHooks/useUser";
import { LandingPageStep } from "./HomePage";
import { DollarSign, List, Paperclip, Search, SearchCheck } from "lucide-react";
import Loader from "../UI/Loader";
import useAllCategories from "../features/category/categoryHooks/useAllCategories";
import { FaBoxOpen, FaSearch } from "react-icons/fa";
import { Select } from "antd";
import { Button } from "../UI/shadcn/Button";
import { toPersianNumbers, toPersianNumbersWithComma } from "../utils/toPersianNumbers";
import { getDeadline } from "../utils/getDeadline";
import toLocalDateShort from "../utils/toLocalDateShort";
import { getNumberOfDays } from "../utils/getNumberOfDays";
import { useNavigate } from "react-router-dom";
import ProjectTags from "../UI/projects/ProjectTags";
// import Select from 'react-select'
function Home() {
  const { projects, isLoading } = useAllProjects();
  const { user, isLoading: isUserLoading } = useUser();
  if (isLoading)
    return (
      <div className="w-full h-screen dark:bg-slate-700 bg-sky-100">
        <Loader />
      </div>
    );
  return (
    <div className="flex flex-col items-center p-2 xl:max-w-screen-xl w-full h-full bg-gradient-to-tl from-white to-sky-100 dark:bg-gradient-to-tl dark:from-slate-700 dark:to-slate-700">
      <h1 className="self-start m-2 text-2xl font-bold text-cyan-800 dark:text-indigo-400">
        خوش اومدی {user?.name}
      </h1>
      <div className="w-[90%] h-[200px] flex items-center justify-evenly flex-wrap gap-2 my-4">
        <LandingPageStep
          logo={
            <Search size={40} className="text-blue-400 dark:text-indigo-400" />
          }
          title="بگرد"
          description="پروژه مورد نظرتو پیدا کن!"
        />
        <LandingPageStep
          logo={
            <List size={40} className="text-blue-400 dark:text-indigo-400" />
          }
          title="پیشنهاد بده!"
          description="روی پروژه پیشنهاد بزار"
        />
      </div>
      <div>
        <h1>جستجو</h1>
        <SearchProjects/>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-cyan-800 dark:text-indigo-50 m-4">پروژه های فعال {toPersianNumbers(projects?.length)}</h2>
        <div>
          {isLoading ? <Loader/> : <ProjectSection projects={projects}/>}
        </div>
      </div>
    </div>
  );
}

export default Home;

export function ProjectSection({projects}){
  return(
      <div className="flex w-[300px]  h-[200px] lg:w-[800px] rounded-md shadow-xl sm:w-[600px] items-center overflow-x-auto gap-2">
      {projects.map((project)=><ProjectCard project={project}/>)}
    </div>
  )
}

export function ProjectCard({project}){
  const navigate = useNavigate()
  console.log(project)
  const date1 = new Date(project?.deadline)
  const date2 = new Date(project?.createdAt)
  const days = getNumberOfDays(date1,date2)
return(
  <div className="min-w-[200px] h-[200px] bg-white dark:bg-slate-600 shadow-xl rounded-xl p-3 flex flex-col items-center justify-evenly">
    <h1 className="text-xl font-bold text-cyan-800 dark:text-indigo-400">{project.title}</h1>
    <p>{toPersianNumbersWithComma(project?.budget)} تومان</p>
    {project?.tags.map(tag=><ProjectTags tags={tag}/>)}
    <p>{toPersianNumbers(days)} روز</p>
    <Button onClick={()=>navigate(`project/${project?._id}`)} className="font-bold bg-sky-300 hover:bg-sky-600 dark:text-white dark:bg-indigo-400 dark:hover:bg-indigo-600">مشاهده </Button>
  </div>
)
}
export function SearchProjects(){
  return(
    <div></div>
  )
}