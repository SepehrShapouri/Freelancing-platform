import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { SidebarItem } from "./SidebarContainer";
import { LayoutDashboard, SettingsIcon, StickyNote, User } from "lucide-react";
function OwnerLayout() {
  return (
    <div className="flex max-h-screen h-screen">
      <div className="flex flex-col h-full w-full overflow-y-auto">
        <div ><Header /></div>
        <div className="flex flex-row w-full h-full overflow-auto z-[100] ">
            <Sidebar>
            <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="داشبورد"
          path="owner-dashboard"
        />
        <SidebarItem
          icon={<StickyNote size={20} />}
          text=" پروژه ها "
          path="projects"
        />
        <SidebarItem icon={<User size={20} />} text="پروفایل" path="profile" />
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

export default OwnerLayout;
