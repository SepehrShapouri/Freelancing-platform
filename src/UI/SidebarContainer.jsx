import React, { createContext, useContext, useState } from "react";
import "../App.css";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { CiLogout } from "react-icons/ci";
import useUser from "../features/authentication/authHooks/useUser";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
import UserAvatar from "./UserAvatar";
const SidebarContext = createContext("");
function SidebarContainer({ children }) {
  const [expanded, setExpanded] = useState(false);
  const { user, isLoading } = useUser();
  return (
    <>
      <aside className="">
        <nav className="h-full flex flex-col bg-white border-l shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <h1
              className={`text-cyan-900 font-bold text-xl overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            >
              فرانت لنس
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
            value={{ expanded }}
          >
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
          <div className="border-t flex p-3 items-center justify-center">
            {isLoading ? <p></p> : <UserAvatar width="w-[50px]" user={user} />}
            {isLoading ? (
              <Loader width="0" />
            ) : (
              <div
                className={`flex justify-between items-center overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3" : "w-0"
                }`}
              >
                <div className="leading-4 mr-2">
                  <h4 className="font-semibold text-sm">{user.name}</h4>
                  <span className="text-xs text-gray-600">{user.email}</span>
                </div>
                <CiLogout className="text-2xl text-cyan-800 hover:text-rose-500 transition-all" />
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}

export default SidebarContainer;

export function SidebarItem({ text, icon, onClick, path }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <NavLink
    onClick={onClick && onClick}
    to={path}
    className={({isActive})=> `max-h-[40px] relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${isActive ? "bg-gradient-to-tr from-sky-200 to-sky-100 text-cyan-800": "hover:bg-sky-50 text-gray-600"}`}
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
          className={` w-[60px] flex items-center justify-center absolute right-full rounded-md px-2 py-1 mr-6 bg-sky-100 text-cyan-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-10`}
        >
          {text}
        </div>
      )}
    </NavLink>
  );
}
