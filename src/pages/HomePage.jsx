import React, { useState } from "react";
import AppLogo from "../UI/AppLogo";
import ToggleTheme from "../UI/ToggleTheme";
import { IoLogoReact } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../features/authentication/authHooks/useUser";
import { Button } from "../UI/shadcn/Button";

function HomePage() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const { user, isLoading } = useUser();
  const navigate = useNavigate()
  console.log(user);
  return (
    <div>
      <div className="bg-[#F2FAFA] p-4 dark:bg-slate-700">
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
          <Button className="bg-sky-500 dark:bg-indigo-500 dark:text-white font-bold dark:hover:bg-indigo-800" onClick={()=>{
                    navigate(user ? user.role == "OWNER" ? "/owner" : "freelancer" : "/auth")
                }}>بزن بریم</Button> 
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
      <div>
        <aside>
          <nav>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </aside>
        <section>
          <div></div>
          <div></div>
        </section>
      </div>
      <div>
        <span>
          <h2></h2>
          <span></span>
        </span>
      </div>
      <div>
        <h2></h2>
        <div></div>
      </div>
      <footer>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </footer>
    </div>
  );
}

export default HomePage;
