import { XIcon } from "lucide-react";
import React from "react";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ children, title, open, onClose}) {
    const ref =  useOutsideClick(onClose)
  return (
    open && (
      <div  className="backdrop">
        <div ref={ref} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-0 shadow-lg rounded-lg transition-all duration-300  p-4 w-[calc(100vw-5rem)] overflow-auto md:max-w-[20rem]">
          <div   className="flex justify-between pb-4 mb-4 border-b border-b-secondary-400">
            <p className="text-cyan-800 text-base font-semibold">{title}</p>
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
