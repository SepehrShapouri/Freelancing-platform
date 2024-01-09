import React from "react";
import { useMoveBack } from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
    <div className="container flex w-full h-full justify-center mt-40 flex-col items-center">
      <h1 className="text-5xl">404</h1>
      <h2 className="mt-4 text-2xl font-bold">صفحه مورد نظر یافت نشد!</h2>
      <button
        className="mt-10 font-bold text-cyan-900 text-xl cursor-pointer hover:text-cyan-700"
        onClick={() => moveBack()}
      >
        بازگشت
      </button>
    </div>
    </div>
  );
}

export default NotFound;
