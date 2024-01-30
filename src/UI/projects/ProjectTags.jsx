import React from 'react'

export default function ProjectTags({tags}){
    return(
        <span className="text-[12px] bg-slate-200 text-gray-500 px-2 rounded-3xl dark:bg-indigo-400 dark:text-white">{tags}</span>
    )
}