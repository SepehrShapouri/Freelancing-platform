import React, { useState } from 'react'
import "../App.css"
import { CiSearch ,CiUser} from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoMoonOutline } from "react-icons/io5";
function Sidebar() {
    const [openSidebar,setOpenSidebar] = useState(false)
  return (
    <div>
        <div className="w-[84px] max-h-[1024px] h-full flex flex-col items-center p-4 justify-between ">
            <div className="flex flex-col gap-y-12 mt-8 items-center">
            <div className="text-cyan-950 font-bold text-3xl">F</div>
            <span className="w-[44px] h-[44px] bg-slate-100 rounded-xl flex justify-center items-center"><CiSearch className='text-xl text-cyan-950'/></span>
                <GoHome className='text-xl text-cyan-950'/>
                <CiUser className='text-xl text-cyan-950'/>
                <GoProjectSymlink className='text-xl text-cyan-950'/>
            </div>
            <div className="flex flex-col gap-y-8 mb-4">
                <TbLogout className='text-xl text-cyan-950'/>
                <IoMoonOutline className='text-xl text-cyan-950'/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar