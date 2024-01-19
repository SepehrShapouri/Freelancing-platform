import { data } from 'autoprefixer'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
function CreateProjectForm({open}) {
const {register,handleSubmit} = useForm()
const [form,setForm] = useState({})
const onSubmit = (data) => {setForm(data),console.log(data)}
  return open && <div className='backdrop flex items-center justify-center'>
    <div className='bg-white w-[calc(100vw-4rem)] h-64 max-h-[800px] rounded-lg shadow-xl max-w-screen-sm'>
      <form onSubmit={handleSubmit(onSubmit)}>
      </form>
    </div>
  </div>
}

export default CreateProjectForm