import React from "react";

function AppLogo({margin = "mb-[20px]"}) {
  return (
    <span className={margin}>
      <h1 className="text-xl sm:text-2xl md:text-4xl text-cyan-800 font-bold dark:text-white">فرانت لنس</h1>
    </span>
  );
}

export default AppLogo;
