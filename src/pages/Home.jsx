import React, { useEffect, useState } from 'react'
import { useAllProjects } from '../features/projects/projectsHooks/useAllProjects'
import useUser from '../features/authentication/authHooks/useUser'
import { LandingPageStep } from './HomePage'
import { DollarSign, List, Paperclip, Search } from 'lucide-react'
import { IoDocument } from 'react-icons/io5'
import { toPersianNumbers } from '../utils/toPersianNumbers'
import Loader from '../UI/Loader'
import useAllCategories from '../features/category/categoryHooks/useAllCategories'
import { Select } from 'antd'
import { FaBoxOpen } from 'react-icons/fa'
import useSingleCategory from '../features/category/categoryHooks/useSingleCategory'
import { useInvalidateQuery } from '../utils/useInvalidateQuery'
import { useQueryClient } from '@tanstack/react-query'


function Home() {
  const {projects,isLoading} = useAllProjects()
  const {user,isLoading:isUserLoading} = useUser()
  const [selectedCateogry,setSelectedCategory] = useState(null)
  const {categories,isLoading:cateogoriesLoading} = useAllCategories()
const filteredProjects = projects?.filter((project)=> project.category._id == selectedCateogry)
  if(isLoading) return <div className='w-full h-screen dark:bg-slate-700 bg-sky-100'><Loader/></div>
  return (
    <div className='flex flex-col items-center p-2 xl:max-w-screen-xl w-full h-full bg-gradient-to-tl from-white to-sky-100 dark:bg-gradient-to-tl dark:from-slate-700 dark:to-slate-700'>
      <h1 className='self-start m-2 text-2xl font-bold text-cyan-800 dark:text-indigo-400'>خوش اومدی {user?.name}</h1>
      <div className='w-[90%] h-[200px] flex items-center justify-evenly flex-wrap gap-2 my-4'>
        <LandingPageStep logo={<Search size={40} className='text-blue-400 dark:text-indigo-400'/>} title="بگرد" description="پروژه مورد نظرتو پیدا کن!"/>
        <LandingPageStep logo={<List size={40} className='text-blue-400 dark:text-indigo-400'/>} title="پیشنهاد بده!" description="روی پروژه پیشنهاد بزار"/>
      </div>
      <div className='w-full h-full bg-red-50'>
        <div className='w-full bg-white h-[70px]'>
{<Categories  setSelectedCategory={setSelectedCategory} categories={categories}/>}
        </div>
      </div>
    </div>
  )
}

export default Home


export function Categories({setSelectedCategory,categories}){
  const allOptions = categories?.map((category)=>({value:category._id,label:category.title}))
  return(
    <div className="flex">
<Select
id="category"
onChange={(e)=>setSelectedCategory(e)}
      showSearch
      style={{
        height:50,
        fontFamily:'Vazir',
      }}
      notFoundContent={
        <div className="flex flex-col items-center gap-y-4 p-4">
            <FaBoxOpen className="text-[40px] text-slate-200"/>
            <p className="font-[vazir] text-slate-400">دسته بندی یافت نشد</p>
        </div>
      }
      placeholder="جستجو در دسته بندی ها"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={allOptions}
    />
</div>
  )
}