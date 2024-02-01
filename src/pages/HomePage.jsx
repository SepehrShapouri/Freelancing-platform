import React, { useState } from 'react'
import AppLogo from '../UI/AppLogo'
import ToggleTheme from '../UI/ToggleTheme'
import { IoLogoReact } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function HomePage() {
    const [isHeaderOpen,setIsHeaderOpen] = useState(false)
  return (
    <div>
        <div className='bg-[#F2FAFA] h-[600px] p-4 dark:bg-slate-700'>
            <header className={`flex items-center ${isHeaderOpen ? "w-full px-4 justify-between" : "w-[50px] sm:w-[70px] justify-center"} h-[50px] bg-white shadow-lg rounded-full  dark:bg-slate-800 transition-all sm:h-[70px]`}>
                <IoLogoReact className='text-[30px] sm:text[40px] text-sky-500 cursor-pointer' onClick={()=>setIsHeaderOpen(prev=>!prev)}/>
                {isHeaderOpen &&   
                <div className='flex items-center justify-between w-full'>
                <h2 className='text-sm font-bold text-cyan-800 dark:text-gray-50 mr-4'>فرانت لنس</h2>  
                     <nav >
                    <ul className='flex gap-x-12 w-full text-cyan-800 cursor-pointer dark:text-gray-50 '>
                        <Link to="/auth" className='hover:text-cyan-500 dark:hover:text-indigo-400 transition-all'>ورود</Link>
                        <Link to="/auth" className='hover:text-cyan-500 dark:hover:text-indigo-400 transition-all'>ثبت نام</Link>
                        <ToggleTheme/>
                    </ul>
                </nav>
                </div>}
            </header>
            <main className='flex flex-col sm:flex-row'>
                <div><img src="" alt="" /></div>
                <div></div>
            </main>
        </div>
        <div>
            <aside>
                <nav>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </aside>
            <section>
                <div></div>
                <div></div>
            </section>
        </div>
        <div>
            <span>
                <h2></h2>
                <span></span>
            </span>
        </div>
        <div>
            <h2></h2>
            <div></div>
        </div>
        <footer>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </footer>
    </div>
  )
}

export default HomePage