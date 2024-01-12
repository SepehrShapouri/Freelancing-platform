import React, { createContext, useContext, useState } from "react";
import "../App.css";
import { FaUserCircle } from "react-icons/fa";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { CiLogout } from "react-icons/ci";
const SidebarContext = createContext("");
function SidebarContainer({children}) {
    const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(3);
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-l shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <h1
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            >
              Frontlance
            </h1>
            <button
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? (
                <ChevronLast className="text-cyan-900" />
              ) : (
                <ChevronFirst className="text-cyan-900" />
              )}
            </button>
          </div>
          <SidebarContext.Provider
            value={{ expanded, activeTab, setActiveTab }}
          >
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
          <div className="border-t flex p-3 items-center justify-center">
            <FaUserCircle className="w-10 h-10 text-cyan-900" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              <div className="leading-4 mr-2">
                <h4 className="font-semibold text-sm">سپهر شاپوری</h4>
                <span className="text-xs text-gray-600">
                  sepehrshapouri@gmail.com
                </span>
              </div>
              <CiLogout className="text-2xl text-cyan-800 hover:text-rose-500 transition-all" />
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default SidebarContainer

export function SidebarItem({ text, icon, id, onClick }) {
  const { expanded, activeTab, setActiveTab } = useContext(SidebarContext);
  const handleActiveTab = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <li
      className={` max-h-[40px] relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        activeTab == id
          ? "bg-gradient-to-tr from-sky-200 to-sky-100 text-cyan-800"
          : "hover:bg-sky-50 text-gray-600"
      }`}
      onClick={onClick ? onClick : () => handleActiveTab(id)}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 mr-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {!expanded && (
        <div
          className={`absolute right-full rounded-md px-2 py-1 mr-6 bg-sky-100 text-cyan-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
