import { XIcon } from "lucide-react";
import React from "react";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ children, title, open, onClose}) {
    // const ref =  useOutsideClick(onClose)
  return (
    open && (
      <div  className="backdrop z-[10000]">
        <div  className="z-[10000] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-slate-600 bg-white shadow-lg rounded-lg transition-all duration-300  p-4 w-[calc(100vw-5rem)] overflow-auto md:max-w-[20rem]">
          <div   className="flex justify-between pb-4 mb-4 border-b border-b-secondary-400">
            <p className="text-cyan-800 text-base font-semibold dark:text-white">{title}</p>
            <XIcon
              className=" transition-all hover:text-rose-500"
              onClick={onClose}
            />
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
