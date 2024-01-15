
import React, { useState } from "react";
import {
  Home,
  LayoutDashboard,
  Moon,
  Settings,
  StickyNote,
  Sun,
  User,
} from "lucide-react";
import SidebarContainer, { SidebarItem } from "./SidebarContainer";
function Sidebar() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="flex max-h-[1024px]">
      <SidebarContainer>
                <SidebarItem icon={<Home size={20} />} text="خانه"  />
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="داشبورد"
          path="owner-dashboard"
        />
        <SidebarItem icon={<StickyNote size={20} />} text=" پروژه ها "  path="projects" />
        <SidebarItem icon={<User size={20} />} text="پروفایل"  path="profile"/>
        <hr className="mt-5" />
        <SidebarItem icon={<Settings size={20} />} text="تنظیمات"  />
        <SidebarItem
          icon={theme == "dark" ? <Sun size={20} /> : <Moon size={20} />}
          text="تم"
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        />
      </SidebarContainer>
    </div>
  );
}

export default Sidebar;
