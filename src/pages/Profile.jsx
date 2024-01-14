import React from "react";
import useUser from "../features/authentication/authHooks/useUser";
import { CiUser } from "react-icons/ci";
import Loader from "../UI/Loader";
import UserAvatar from "../UI/UserAvatar";

function Profile() {
  const { user, isLoading } = useUser();
  return (
    <div className=" w-full h-full flex items-start justify-center  bg-gradient-to-br from-sky-50 to-sky-100">
      <div className="flex bg-white w-[350px] h-[400px] sm:w-[600px] sm:h-[300px] rounded-xl mt-[80px] shadow-lg items-center p-4 flex-col">
        {isLoading ? (
          <span className="mt-[160px]">
            <Loader />
          </span>
        ) : (
          <div className="flex flex-col items-center">
            <span className="mt-6">
                <UserAvatar width="w-[100px]" user={user}/>
            </span>
            <span className="flex flex-col items-center">
              <h1 className="font-semibold text-cyan-950 mt-4">{user.name}</h1>
              <p className="text-xs text-gray-400">{user.email}</p>
            </span>
            <span>
              <p className="text-cyan-800 font-bold mt-4">
                {user.role == "OWNER" ? "کارفرما" : "فری لنسر"}
              </p>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
