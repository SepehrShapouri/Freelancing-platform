import { data } from 'autoprefixer'
import { XIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useOutsideClick from '../../hooks/useOutsideClick'
function CreateProjectForm({open,onClose}) {
const {register,handleSubmit} = useForm()
const onSubmit = (data) => {}
const ref =useOutsideClick(onClose)
  return open && <div className='backdrop flex items-center justify-center'>
    <div ref={ref} className='bg-white w-[calc(100vw-4rem)] h-64 max-h-[800px] rounded-lg shadow-xl max-w-screen-sm p-4'>
      <div className='flex justify-between items-center pb-4 mb-4 border-b border-b-secondary-400'>
        <h2 className='text-xl font-bold text-cyan-800'>ایجاد پروژه جدید</h2>
        <XIcon className='transition-all hover:text-red-500' onClick={onClose}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      </form>
    </div>
  </div>
}

export default CreateProjectForm