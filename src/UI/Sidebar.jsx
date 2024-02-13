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
function Sidebar({ children }) {
  return (
    <div className="flex max-h-[1024px]">
      <SidebarContainer>
        {children}
      </SidebarContainer>
    </div>
  );
}

export default Sidebar;
