import React, { useState } from "react";
import Loader from "./Loader";
import useOwnerProjects from "../features/projects/projectsHooks/useOwnerProjects";
import { CiRead,CiUnread } from "react-icons/ci";
import { IoAdd, IoAddCircle } from "react-icons/io5";
const projects = [
  {
    id: 1,
    title: "react website (tailwindcss)",
    description:
      "we are looking for a designer that can create a fully functional react webssite implemented with react and tailwidncss (backend is ready)",
    budget: 1234124,
    deadline: "2024/12/22",
    tags: "tailwind",
    category:"frontend"
  },
  {
    id: 1,
    title: "react website (tailwindcss)",
    description:
      "we are looking for a designer that can create a fully functional react webssite implemented with react and tailwidncss (backend is ready)",
    budget: 1234124,
    deadline: "2024/12/22",
    tags: "tailwind",
    category:"frontend"
  },
  {
    id: 1,
    title: "react website (tailwindcss)",
    description:
      "we are looking for a designer that can create a fully functional react webssite implemented with react and tailwidncss (backend is ready)",
    budget: 1234124,
    deadline: "2024/12/22",
    tags: "tailwind",
    category:"frontend"
  },
];
function ProjectTable() {
//   const { projects } = useOwnerProjects();
  const isLoading = false;
  return (
    <div className="h-full w-full  flex">
      {isLoading ? (
        <span className="mb-[120px]">
          <Loader />
        </span>
      ) : projects.length < 1 ? (
        <div className="p-12">
                    <p  className="text-2xl font-bold text-cyan-800">پروژه فعال یافت نشد!</p>
        </div>
      ) : (
        <ProjectTableView/>
      )}
    </div>
  );
}

export default ProjectTable;

export function ProjectTableView(){
    return(
        <div className="w-full flex flex-col transition-all items-center sm:px-20">
            <div className="flex w-full items-center justify-between my-14 px-2">
                <h2 className="text-cyan-800 text-xl sm:text-2xl font-bold">پروژه های شما</h2>
                <button className="flex items-center bg-cyan-800 text-white px-4 py-2 justify-between w-[120px] sm:w-[150px] sm:text-lg text-sm rounded-xl hover:bg-cyan-600 transition-all">پروژه جدید <IoAddCircle/> </button>
            </div>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[300px] sm:w-[600px] md:w-[800px] lg:w-[1024px] transition-all">
    <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3 text-cyan-800">
                    نام پروژه
                </th>
                <th scope="col" className="px-6 py-3 text-cyan-800">
                    توضیحات
                </th>
                <th className="px-6 py-3 text-cyan-800" scope="col">
                    تگ ها
                </th>
                <th scope="col" className="px-6 py-3 text-cyan-800">
                    بودجه
                </th>
                <th scope="col" className="px-6 py-3 text-cyan-800">
                    دسته بندی
                </th>
                <th scope="col" className="px-6 py-3 text-cyan-800">
                    ددلاین
                </th>
                <th scope="col" className="pc-6 py-4 text-cyan-800"> 
                    تنظیمات
                </th>
            </tr>
        </thead>
        <tbody>
            {projects.map((p)=> <ProjectTableRow title={p.title} desc={p.desc} budget={p.budget} deadline={p.deadline} category={p.category} tags={p.tags}/>)}
        </tbody>
    </table>
</div>
        </div>

    )
}
export function ProjectTableRow({title,desc,deadline,budget,tags,category}){
    const [openDesc,setOpenDesc] = useState(false)
    return(
        <tr className="bg-white border-b">
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowraw projectTableData">
            {title}
        </th>
        <td className="projectTableData flex items-center justify-center border-none" onClick={()=>setOpenDesc(prev =>!prev)}>
            {openDesc ? <CiUnread className="read-desc-icon"/> : <CiRead className="read-desc-icon"/>}
        </td>
        <td className="projectTableData">
            <ProjectTags tags={tags}/>
        </td>
        <td className="projectTableData">
{budget}
        </td>
        <td className="projectTableData">
        {category}
        </td>
        <td className="projectTableData">
            {deadline}
        </td>
        <td className="projectTableData">

        </td>
    </tr>
    )
}
export function ProjectTags({tags}){
    return(
        <span className="text-[12px] bg-slate-200 text-gray-500 px-2 rounded-3xl">{tags}</span>
    )
}