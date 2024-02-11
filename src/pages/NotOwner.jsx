import React from 'react'
import AppLogo from '../UI/AppLogo'
import { FaReact } from 'react-icons/fa'
import { Button } from '../UI/shadcn/Button'
import { useNavigate } from 'react-router-dom'

function NotOwner() {
    const navigate = useNavigate()
  return (
    <div className='bg-[#F2FAFA] p-12 dark:bg-slate-700 w-full h-screen flex flex-col gap-y-10'>
        <span className='flex gap-x-3 items-center'><FaReact className='text-4xl text-sky-400'/><h1 className='text-3xl font-bold text-cyan-800'>فرانت لنس</h1></span>
        <h2 className='text-2xl font-bold dark:text-indigo-400 text-cyan-900'>برای دسترسی به این بخش باید کارفرما باشی :(</h2>
        <p className='text-sky-800 font-bold'>اشکالی نداره از اونجایی که فریلنسری ما برات کلی پروژه داریم که میتونی باهاشون کارتو شروع کنی!</p>
        <Button className="bg-sky-400 w-[100px] dark:bg-indigo-500 dark:text-white font-bold hover:bg-sky-700 dark:hover:bg-indigo-700" onClick={()=>navigate("/")}>بزن بریم</Button>
        <img src='src/assets/images/vecteezy_404-error-flat-style-illustration-design_11414192.png' alt='not owner'/>
    </div>
  )
}

export default NotOwner