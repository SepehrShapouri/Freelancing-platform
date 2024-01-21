import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex max-h-screen h-screen">
      <div className="flex flex-col h-full w-full">
        <div ><Header /></div>
        <div className="flex flex-row w-full h-full overflow-hidden z-[100] ">
            <Sidebar/>
          <div className="w-full min-w-[337px] ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
