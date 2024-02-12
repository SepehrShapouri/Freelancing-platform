import React, { useState } from 'react'
import useOwnerProjects from '../features/projects/projectsHooks/useOwnerProjects'
import useUser from '../features/authentication/authHooks/useUser'
import { IoDocumentTextOutline, IoLockClosed, IoOpen } from "react-icons/io5";
import { toPersianNumbers } from '../utils/toPersianNumbers';
import Loader from '../UI/Loader';
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useLocalStorage } from '@uidotdev/usehooks';
import { Button } from '../UI/shadcn/Button';
import { Trash } from 'lucide-react';
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import toast from 'react-hot-toast';
import { TaskList } from '../UI/TaskList';
import NoteList from '../UI/NoteList';
function OwnerDashboard() {
  const {projects,isLoading} = useOwnerProjects()
  const {user,isLoading:userLoading} = useUser()
  const closedProjects = projects?.filter((project)=> project?.status === "CLOSED")
  const openProjects = projects?.filter((project)=>project?.status === "OPEN")
  if(isLoading) return <Loader/>
  return (
    <div className='p-3  w-full bg-gradient-to-tl from-sky-100 to-white dark:bg-gradient-to-tl dark:from-slate-700 dark:to-slate-700  flex flex-col items-center h-full overflow-y-auto ' >
      <h1 className='text-2xl font-bold text-cyan-800 dark:text-white m-4 self-start'>خوش آمدی {user?.name}</h1>
      <div className='flex gap-4 mt-4 flex-wrap justify-center'>
        <DashboardCard color="bg-lime-400" title="پروژه های شما" logo={<IoDocumentTextOutline className='text-2xl text-white sm:text-4xl'/>}>
          <p className='text-4xl font-bold text-white'>{toPersianNumbers(projects?.length)}</p>
        </DashboardCard>
        <DashboardCard color="bg-indigo-400" title="پروژه های تمام شده  " logo={<IoLockClosed className='text-2xl text-white sm:text-4xl'/>}>
          <p className='text-4xl font-bold text-white'>{toPersianNumbers(closedProjects?.length)}</p>
        </DashboardCard>
        <DashboardCard color="bg-amber-300" title="پروژه های باز " logo={<IoOpen className='text-2xl text-white sm:text-4xl'/>}>
          <p className='text-4xl font-bold text-white'>{toPersianNumbers(openProjects?.length)}</p>
        </DashboardCard>
        <DashboardCard color="bg-sky-400" title="ایجاد پروژه جدید" logo={<CiCirclePlus className='text-2xl text-white sm:text-4xl'/>}>
          <Link to="/owner/projects" className='text-2xl text-white font-bold'>بزن بریم</Link>
        </DashboardCard>
      </div>
      <div className='flex gap-x-4 gap-y-8 mt-12 flex-col sm:flex-row mb-[30px]'>
        <TaskList/>
        <NoteList/>
      </div>
    </div>
  )
}

export default OwnerDashboard
export function DashboardCard({children,title,logo,color}){
  return(
    <div className={`${color} w-[150px] lg:w-[250px] h-[150px] rounded-xl shadow-lg hover:opacity-80 transition-all flex items-center flex-col justify-evenly px-2`}>
      <span className='flex items-center gap-x-4'><h1 className='text-white font-bold text-sm sm:text-xl'>{title}</h1>{logo}</span>
      {children}
    </div>
  )
}

