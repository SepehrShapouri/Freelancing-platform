import React, { useEffect } from "react";
import AuthContainer from "../features/authentication/AuthContainer";
import AppLogo from "../UI/AppLogo";
import { useThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
function Auth() {
  const context = useThemeContext()
  return (
    <div className="xl:max-w-screen-2xl flex flex-col h-screen justify-center items-center  bg-gradient-to-tl from-sky-50 to-sky-100 dark:bg-gradient-to-tl dark:from-slate-700 dark:to-slate-700">
      <div className="flex gap-x-4">      <div><span className="cursor-pointer text-cyan-600 hover:opacity-80 transition-all" onClick={()=>context.setIsDarkMode(!context.isDarkMode)}>{context.isDarkMode ? <Sun className="dark:text-white dark:hover:text-indigo-400 transition-all"/> : <Moon className="dark:text-white dark:hover:text-indigo-400 transition-all"/>}</span></div>
      <AppLogo/></div>
      <div className="mb-10 mt-5">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
