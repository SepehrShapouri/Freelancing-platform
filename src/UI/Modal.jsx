import { XIcon } from "lucide-react";
import React from "react";

function Modal({ children, title, open, onClose }) {
  return (
    open && (
      <div className="backdrop-blur-sm bg-secondary-800 w-full h-screen fixed top-0 left-0 z-50 bg-opacity-30">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-0 shadow-lg rounded-lg transition-all duration-300  p-4 w-[calc(100vw-5rem)] overflow-auto md:max-w-[20rem]">
          <div className="flex justify-between pb-4 mb-4 border-b border-b-secondary-400">
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
