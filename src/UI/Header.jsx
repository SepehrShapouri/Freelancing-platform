import React, { useState } from "react";
import AppLogo from "./AppLogo";
import { RxExit } from "react-icons/rx";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
function Header() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <div className="flex bg-red-100 sm:h-20 h-16 w-full transition-all ease-in flex items-center p-2 justify-between">
        <h2 className="text-md font-bold text-cyan-800 sm:text-xl">
          فریلنس آی او
        </h2>
        <div className="flex w-20 bg-yellow-200 justify-between flex-row-reverse sm:w-32">
          <RxExit className="header__icon" />
          <span
            onClick={() =>
              setTheme((prev) => (prev == "light" ? "dark" : "light"))
            }
          >
            {theme === "light" ? (
              <IoSunnyOutline className="header__icon" />
            ) : (
              <IoMoonOutline className="header__icon" />
            )}
          </span>
          <CiUser className="header__icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
