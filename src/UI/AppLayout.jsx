import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex max-h-screen h-screen">
      <div className="flex flex-col h-full w-full">
        <Header />
        <div className="flex flex-row w-full h-full">
          <Sidebar />
          <div className="bg-cyan-100 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
