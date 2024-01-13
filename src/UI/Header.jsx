import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import useUser from "../features/authentication/authHooks/useUser";
import { Link } from "react-router-dom";
function Header() {
    const {data} = useUser()
     console.log(data)
  return (
    <div className="h-[70px] w-full border-b flex items-center justify-between p-4">
        <div className="flex items-center">
<span className="ml-4"><FaReact className="text-sky-400 text-4xl"/></span>
            <h2 className="text-xl font-bold text-cyan-900">فرانت لنس</h2>
        </div>
        <div className="flex items-center">
        </div>
    </div>
  );
}

export default Header;
