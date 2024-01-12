import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
function Header() {
  return (
    <div className="h-[70px] w-full border-b flex items-center justify-between p-4">
        <div className="flex items-center">
<span className="ml-4"><FaReact className="text-sky-400 text-4xl"/></span>
            <h2 className="text-xl font-bold text-cyan-900">فرانت لنس</h2>
        </div>
        <div>
        <button className="hover:opacity-80 transition-all ease-in bg-white text-cyan-900 p-2 rounded-xl border border-cyan-900">ورود</button>
            <button className="hover:opacity-80 transition-all ease-in bg-cyan-900 m-2 text-white p-2 rounded-xl">ثبت پروژه</button>
        </div>
    </div>
  );
}

export default Header;
