import React from "react";
import { useUserLogout } from "./authHooks/useUserLogout";
import Modal from "../../UI/Modal";
function Logout({onClose}) {
    const {userLogout,isLoggingOut} = useUserLogout()
  return (
    <div className="flex justify-between text-sm ">
      <button onClick={()=>userLogout()} className=" btn--primary dark:bg-dark-mode text-xs sm:text-sm" disabled={isLoggingOut}>خروج از حساب کاربری</button>
      <button onClick={onClose} className="btn--secondary text-xs sm:text-sm" disabled={isLoggingOut}>پشیمون شدم</button>
    </div>
  );
}

export default Logout;
