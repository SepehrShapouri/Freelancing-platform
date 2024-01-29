import React, { useState } from "react";
import { FaDoorClosed, FaReact } from "react-icons/fa";
import useUser from "../features/authentication/authHooks/useUser";
import { Link } from "react-router-dom";
import { LogOut, Moon, Sun } from "lucide-react";
import { PiDoorOpen } from "react-icons/pi";
import { useThemeContext } from "../context/ThemeContext";
import { useUserLogout } from "../features/authentication/authHooks/useUserLogout";
import { useLocalStorage } from "@uidotdev/usehooks";
function Header() {
  const context = useThemeContext()
  const {user,isLoading} = useUser()
  const {isLoggingOut,userLogout} = useUserLogout()
  function toggleTheme(){
context.setIsDarkMode(prev=>!prev)
  }
  return (
    <div className="h-[70px] w-full border-b flex dark:border-b-slate-500 items-center justify-between p-4 dark:bg-slate-700 dark:text-slate-100 ">
        <div className="flex items-center">
<span className="ml-4"><FaReact className="text-sky-400 text-4xl"/></span>
            <h2 className="text-xl font-bold text-cyan-900 dark:text-white">فرانت لنس</h2>
        </div>
        <div className={`flex items-center gap-x-6 sm:gap-x-8 ${isLoading ? "blur" : ""} transition-all sm:px-4`}>
          <span className="flex items-center jsutify-evenly gap-x-2 sm:gap-x-4"><p className="text-sm text-cyan-950 sm:text-xl dark:text-white">{user?.name}</p><PiDoorOpen className="text-cyan-600 hover:text-rose-500 text-2xl sm:text-2xl transition-all dark:text-white" onClick={()=>userLogout()}/></span>
          <span className="cursor-pointer text-cyan-600 hover:opacity-80 transition-all" onClick={()=>toggleTheme()}>{context.isDarkMode ? <Sun className="dark:text-white"/> : <Moon className="dark:text-white"/>}</span>
        </div>
    </div>
  );
}

export default Header;
