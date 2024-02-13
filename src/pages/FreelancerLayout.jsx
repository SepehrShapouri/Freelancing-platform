import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../UI/Header";
import Sidebar from "../UI/Sidebar";
import { Home, LayoutDashboard, SettingsIcon, User } from "lucide-react";
import { SidebarItem } from "../UI/SidebarContainer";
import { MdDashboard } from "react-icons/md";

function FreelancerLayout() {
  return (
    <div className="flex max-h-screen h-screen">
      <div className="flex flex-col h-full w-full overflow-y-auto">
        <div>
          <Header />
        </div>
        <div className="flex flex-row w-full h-full overflow-auto z-[100] ">
          <Sidebar>
            <SidebarItem icon={<Home size={20} />} text="خانه" path="Home" />
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="داشبورد"
              path="freelancer-dashboard"
            />
            <SidebarItem
              icon={<User size={20} />}
              text="پروفایل"
              path="profile"
            />
            <hr className="mt-5" />
            <SidebarItem
              icon={<SettingsIcon size={20} />}
              text="تنظیمات"
              path="settings"
            />
          </Sidebar>
          <div className="w-full min-w-[337px] ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreelancerLayout;
