import React from "react";
import { useUserLogout } from "./authHooks/useUserLogout";
import Modal from "../../UI/Modal";
function Logout({onClose}) {
    const {userLogout,isLoggingOut} = useUserLogout()
  return (
    <div className="flex justify-between p-4 text-sm">
      <button onClick={()=>userLogout()} className=" btn--primary dark:bg-dark-mode" disabled={isLoggingOut}>خروج از حساب کاربری</button>
      <button onClick={onClose} className="btn--secondary" disabled={isLoggingOut}>پشیمون شدم</button>
    </div>
  );
}

export default Logout;
