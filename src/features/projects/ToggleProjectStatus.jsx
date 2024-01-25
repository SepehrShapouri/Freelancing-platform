import React from "react";
import useToggleProjectStatus from "./projectsHooks/useToggleProjectStatus";
import Toggle from "../../UI/Toggle";
import Loader from "../../UI/Loader";
function toggleProjectStatus({ project }) {
  const enabled = project.status === "OPEN" ? true : false;
  const projectStatus = {
    status: project.status === "OPEN" ? "CLOSED" : "OPEN",
  };
  const { isToggling, toggleProjectStatus } = useToggleProjectStatus();
  const toggleHandler = () => {
    toggleProjectStatus({ id: project?._id, projectStatus });
  };
  return (
    <>
      {isToggling ? (
        <Loader height="20px" width="40px" />
      ) : (
        <Toggle enabled={enabled} onChange={toggleHandler} />
      )}
    </>
  );
}

export default toggleProjectStatus;
