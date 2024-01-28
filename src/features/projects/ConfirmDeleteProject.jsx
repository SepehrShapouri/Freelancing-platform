import React from 'react'

function ConfirmDeleteProject({resourceName,onClose,onConfirm,disabled}) {
  return (
    <div className="flex flex-col gap-y-8">
    <h1 className="mt-4 text-sm font-semibold text-cyan-950">آیا از حذفه پروژه {resourceName    } اطمینان دارید؟</h1>
    <div className="flex justify-between">
        <button className="hover:opacity-65 
        transition-all bg-error 
        py-1 px-4 text-lg rounded-lg
         text-white font-bold" onClick={onConfirm} disabled={disabled}>حذف</button>
        <button className="hover:opacity-65
         transition-all 
          bg-cyan-900  py-1 px-4 
          text-lg rounded-lg text-white
           font-bold" onClick={onClose} disabled={disabled}>انصراف</button>
    </div>
</div>
  )
}

export default ConfirmDeleteProject