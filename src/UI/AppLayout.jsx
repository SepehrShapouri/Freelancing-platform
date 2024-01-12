import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarItem } from "./SidebarContainer";
import Header from "./Header";
import { Home, LayoutDashboard, Settings, User } from "lucide-react";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex max-h-screen h-screen">
      <div className="flex flex-col h-full w-full">
        <div ><Header /></div>
        <div className="flex flex-row w-full h-full">
            <Sidebar/>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
