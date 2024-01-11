import React, { createContext, useState } from "react";
import "../App.css";
import { CiSearch, CiUser } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
const user = {
  name: "سپهر شاپوری",
  phoneNumber: "09907270226",
  email: "Sepehrshapouri@gmail.com",
};
const SidebarContext = createContext();
function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
                <h1 className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}>Frontlance</h1>
            </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
