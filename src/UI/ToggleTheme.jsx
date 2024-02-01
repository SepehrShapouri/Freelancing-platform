import React from 'react'
import { useThemeContext } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

function ToggleTheme() {
    const {isDarkMode,setIsDarkMode} = useThemeContext()
  return (
    <span className="cursor-pointer text-cyan-600 hover:opacity-80 transition-all" onClick={()=>setIsDarkMode(prev=>!prev)}>{isDarkMode ? <Sun className="dark:text-indigo-400"/> : <Moon />}</span>
  )
}

export default ToggleTheme