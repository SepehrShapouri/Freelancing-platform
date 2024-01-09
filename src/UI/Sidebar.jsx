import React, { useState } from 'react'

function Sidebar() {
    const [openSidebar,setOpenSidebar] = useState(false)
  return (
    <div className={` w-20 rounded-tl-xl sm:w-56 transition-all ease-in sm:rounded-none shadow-md bg-slate-700 ${openSidebar ? "w-56 rounded-tl-none" : "w-20"}`} onClick={()=>setOpenSidebar(prev=>!prev)}></div>
  )
}

export default Sidebar