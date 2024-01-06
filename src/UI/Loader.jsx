import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader({ height = "40", width = "75" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      color="#0e7490"
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
