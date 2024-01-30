import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useThemeContext } from "../context/ThemeContext";

function Loader({ height = "40", width = "75" }) {
  const {isDarkMode} = useThemeContext()
  return (
    <ThreeDots
      height={height}
      width={width}
      color={`${isDarkMode ? "#818cf8" : "#0e7490"}`}
      radius={9}
      wrapperClass={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}

export default Loader;
