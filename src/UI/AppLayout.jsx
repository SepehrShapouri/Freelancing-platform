import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="flex flex-col h-screen max-h-screen-xl max-w-screen-xl">
      <div className="bg-red-100 h-14">header</div>
      <div className="h-full flex relative">
        <div
          className={`bg-red-200 h-full ${
            toggleSidebar ? "w-4/12 z-10 opacity-65" : "w-2/12"
          } transition-all ease-in sm:w-2/12`}
          onClick={() => setToggleSidebar((prev) => !prev)}
        >
          sidebar
        </div>
        <div className="bg-red-300 w-10/12 z-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
