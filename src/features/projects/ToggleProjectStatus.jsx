import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import useToggleProjectStatus from './projectsHooks/useToggleProjectStatus'
function toggleProjectStatus({project}) {
    const [enabled,setEnabled]=useState(project.status === "OPEN" ? true :false)
    const projectStatus = {
        status: project.status === "OPEN" ? "CLOSED" : "OPEN"
    }
    const {isToggling,toggleProjectStatus} = useToggleProjectStatus()
  return (
    <Switch
    checked={enabled}
    onChange={()=>{setEnabled(!enabled),toggleProjectStatus({id:project?._id,projectStatus})}}
    className={`${
      enabled ? 'bg-sky-400' : 'bg-gray-200'
    } relative inline-flex h-6 w-11 items-center rounded-full`}
  >
    <span className="sr-only">Enable notifications</span>
    <span
      className={`${
        enabled ? '-translate-x-6' : '-translate-x-1'
      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
    />
  </Switch>
  )
}

export default toggleProjectStatus