import React, { useState } from "react";
import AppLogo from "../UI/AppLogo";
import ToggleTheme from "../UI/ToggleTheme";
import { IoDocumentTextOutline, IoLogoReact } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../features/authentication/authHooks/useUser";
import { Button } from "../UI/shadcn/Button";
import { FaGithub, FaLinkedin, FaLock } from "react-icons/fa";
import {
  MdLock,
  MdLockPerson,
  MdOutlineImageSearch,
  MdOutlineSafetyCheck,
} from "react-icons/md";
import { useAllProjects } from "../features/projects/projectsHooks/useAllProjects";
import { toPersianNumbers } from "../utils/toPersianNumbers";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

function HomePage() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gradient-to-tl from-sky-50 to-sky-100 dark:bg-gradient-to-tl dark:from-slate-700 dark:to-slate-700 p-4 h-screen w-full ">
        <header
          className={`flex items-center ${
            isHeaderOpen
              ? "w-full px-4 justify-between"
              : "w-[50px] sm:w-[70px] justify-center"
          } h-[50px] bg-white shadow-lg rounded-full  dark:bg-slate-800 transition-all sm:h-[70px]`}
        >
          <IoLogoReact
            className="text-[30px] sm:text[40px] text-sky-500 cursor-pointer"
            onClick={() => setIsHeaderOpen((prev) => !prev)}
          />
          {isHeaderOpen && (
            <div className="flex items-center justify-between w-full text-sm sm:text-lg">
              <h2 className="text-sm font-bold text-cyan-800 dark:text-gray-50 mr-4">
                فرانت لنس
              </h2>
              <nav>
                <ul className="flex gap-x-3 sm:gap-x-12 w-full text-cyan-800 cursor-pointer dark:text-gray-50 ">
                  {user ? (
                    <>
                      <Link
                        to={user.role == "OWNER" ? "/owner" : "/freelancer"}
                        className="hover:text-cyan-500 dark:hover:text-indigo-400 transition-all"
                      >
                        پنل کاربری
                      </Link>
                      <h3>{user.name}</h3>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/auth"
                        className="hover:text-cyan-500 dark:hover:text-indigo-400 transition-all"
                      >
                        ورود
                      </Link>
                      <Link
                        to="/auth"
                        className="hover:text-cyan-500 dark:hover:text-indigo-400 transition-all"
                      >
                        ثبت نام
                      </Link>
                    </>
                  )}
                  <ToggleTheme />
                </ul>
              </nav>
            </div>
          )}
        </header>
        <main className="flex flex-col sm:flex-row items-center justify-between px-4 my-8 gap-y-8">
          <div>
            <h1 className="text-4xl font-bold text-cyan-800 my-4 dark:text-white">
              دنبال فری لنسر های خفن میگردی؟
            </h1>
            <p className="text-2xl text-sky-900 dark:text-indigo-400">
              تو فرانت لنس میتونی پروژه هاتو به بهترین های این صنعت بسپری!
            </p>
            <p>تازه اگه فریلنسری اینجا میتونی پروژه های خفن پیدا کنی :)</p>
            <div className="mt-4">
              <Button
                className="bg-sky-500 dark:bg-indigo-500 dark:text-white font-bold dark:hover:bg-indigo-800"
                onClick={() => {
                  navigate(
                    user
                      ? user.role == "OWNER"
                        ? "/owner"
                        : "freelancer"
                      : "/auth"
                  );
                }}
              >
                بزن بریم
              </Button>
            </div>
          </div>
          <div>
            <img
              className="w-[400px]"
              src="src/assets/images/—Pngtree—web development illustration modern_4461019.png.jpeg"
              alt=""
            />
          </div>
        </main>
      </div>
      <div className=" bg-gray-50 dark:bg-slate-600">
        <nav>
          <ul className="flex w-full justify-between px-4 py-1 relative bottom-9">
            <LandingPageStep
              logo={
                <MdLockPerson className="text-4xl text-sky-400 dark:text-indigo-400" />
              }
              title="پروفایلتو بساز"
              description="با چند کلیک اکانتتو تکمیل کن"
            />
            <LandingPageStep
              logo={
                <MdOutlineImageSearch className="text-4xl text-sky-400 dark:text-indigo-400" />
              }
              title="پروژه پیدا کن"
              description="بهترین پروژه ها تو فرانت لنسه!"
            />
            <LandingPageStep
              logo={
                <MdOutlineSafetyCheck className="text-4xl text-sky-400 dark:text-indigo-400" />
              }
              title="خیالت راحت"
              description="اینجا همه چی امن و امانه!"
            />
          </ul>
        </nav>
      </div>
      <footer className=" w-full h-[200px] bg-white dark:bg-slate-600 border-t dark:border-t-indigo-400 border-t-sky-400 flex items-center justify-center flex-col gap-y-3">
        <h1 className="text-xl font-bold text-cyan-800 dark:text-indigo-400">
          فرانت لنس
        </h1>
        <h1>Developed by Sepehr shapouri</h1>
        <div className="w-[300px] flex h-[50px] justify-center items-center">
          <span className=" w-[60px] h-[60px] flex items-center justify-evenly">
            <a href="https://www.linkedin.com/in/sepehrshapouri/">
              <FaLinkedin className="text-3xl cursor-pointer text-sky-400 dark:text-indigo-400" />
            </a>
          </span>
          <span className=" w-[60px] h-[60px] flex items-center justify-evenly">
            <a href="https://github.com/SepehrShapouri">
              <FaGithub className="text-3xl cursor-pointer text-sky-400 dark:text-indigo-400" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

export function LandingPageStep({ logo, title, description }) {
  return (
    <li className="text-xs w-[150px] flex flex-col items-center text-center  bg-white rounded-xl p-4 shadow-xl dark:bg-slate-800">
      <span>{logo}</span>
      <h3 className="text-cyan-900 dark:text-indigo-400 font-bold my-2">
        {title}
      </h3>
      <p className="text-cyan-950 dark:text-white">{description}</p>
    </li>
  );
}
