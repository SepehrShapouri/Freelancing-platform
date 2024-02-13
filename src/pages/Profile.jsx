import React, { useState } from "react";
import useUser from "../features/authentication/authHooks/useUser";
import Loader from "../UI/Loader";
import UserAvatar from "../UI/UserAvatar";
import { FaPen } from "react-icons/fa";
import useSetAvatar from "../features/avatar/avatarhooks/useSetAvatar";
import { MdClose } from "react-icons/md";
import { maleAvatars, femaleAvatars } from "../utils/avatars";
function Profile() {
  const { user, isLoading } = useUser();
  const [toggleAvatarModal, setToggleAvatarModal] = useState(false);
  return (
    <div className=" w-full h-full flex items-start justify-center  bg-gradient-to-tl from-white to-sky-100 relative px-4 sm:px-0 dark:bg-gradient-to-tr dark:from-slate-700 dark:to-slate-700">
      {toggleAvatarModal && <PickAvatarModal setToggleAvatarModal={setToggleAvatarModal}/>}
      <div className="flex bg-white w-[350px] h-[400px] sm:w-[600px] sm:h-[300px] rounded-xl mt-[80px] shadow-lg items-center p-4 flex-col dark:bg-slate-800 ">
        {isLoading ? (
          <span className="mt-[160px]">
            <Loader />
          </span>
        ) : (
          <div className="flex flex-col items-center">
            <span className="mt-8">
              <UserAvatar width="w-[100px]" user={user} />
              <span
                className="relative bottom-[90px]"
                onClick={() => setToggleAvatarModal((prev) => !prev)}
              >
                <FaPen className="text-slate-500 hover:text-slate-300 transition-all dark:text-indigo-400 " />
              </span>
            </span>
            <span className="flex flex-col items-center">
              <h1 className="font-semibold text-cyan-950 mt-4 mb-2 dark:text-white">
                {user.name}
              </h1>
              <p className="text-xs text-gray-400">{user.email}</p>
            </span>
            <span>
              <p className="text-cyan-800 font-bold mt-4 dark:text-white">
                {user.role == "OWNER" ? "کارفرما" : "فری لنسر"}
              </p>
            </span>
            <span className="mt-2">{user.biography}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
function PickAvatarModal({ setToggleAvatarModal }) {
  const { user } = useUser();
  const gender = user.gender;
  const { setAvatarHandler} = useSetAvatar();
  let avatars = gender == "MALE" ? maleAvatars : femaleAvatars;
  const [activeAvatar, setActiveAvatar] = useState();
  const activeAvatarUrl = avatars.find((avatar) => avatar.id == activeAvatar);
  const setAvatar = () => {
    setToggleAvatarModal(false);
    setAvatarHandler(activeAvatarUrl.url);
  };
  return (
    <div className="h-full w-full absolute transition-all">
      <div className=" absolute h-full w-full flex justify-center backdrop-brightness-[.80] dark:backdrop-brightness-[.50] z-10 transition-all">
        <div className="w-[400px] sm:w-[600px] sm:h-[300px] h-[400px] shadow-xl rounded-xl transition-all bg-white z-20 b mt-[120px] dark:bg-slate-800">
          <MdClose
            className="text-rose-500 text-2xl m-2"
            onClick={() => setToggleAvatarModal(false)}
          />
          <div className=" flex flex-col items-center">
            <p className="text-cyan-800 font-bold dark:text-white">اواتار خود را انتخاب کنید</p>
            <div className="flex flex-wrap w-[300px] sm:w-full justify-center gap-4 mt-6">
              {avatars.map((avatar,index) => (
                <SingleAvatar
                key={index}
                  avatar={avatar}
                  activeAvatar={activeAvatar}
                  setActiveAvatar={setActiveAvatar}
                />
              ))}
            </div>
            <button
              className="w-[200px] bg-cyan-700 dark:bg-dark-mode text-white rounded-md mt-10 h-[40px] hover:opacity-65 transition-all"
              onClick={() => setAvatar()}
            >
              تایید آواتار
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleAvatar({ avatar, setActiveAvatar, activeAvatar }) {
  return (
    <img
      src={avatar.url}
      className={` ${
        activeAvatar == avatar.id ? "opacity-50" : ""
      } rounded-full w-[80px] hover:opacity-70 transition-all`}
      alt=""
      onClick={() => setActiveAvatar(avatar.id)}
    />
  );
}
