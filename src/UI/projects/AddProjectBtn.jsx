import React from 'react'
import { IoAddCircle } from 'react-icons/io5'

function AddProjectBtn({onClick}) {
  return (
    <button onClick={onClick} className="flex items-center bg-cyan-800 text-white px-4 py-2 justify-between w-[120px] sm:w-[150px] sm:text-lg text-sm rounded-xl hover:bg-cyan-600 transition-all">
    پروژه جدید <IoAddCircle />
  </button>
  )
}

export default AddProjectBtn