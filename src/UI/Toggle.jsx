import { Switch } from '@headlessui/react'
import React from 'react'

function Toggle({enabled,onChange}) {
  return (
    <Switch
    checked={enabled}
    onChange={onChange}
    className={`${
      enabled ? 'bg-sky-400' : 'bg-gray-200'
    } relative inline-flex h-6 w-11 items-center rounded-full`}
  >
    <span
      className={`${
        enabled ? '-translate-x-6' : '-translate-x-1'
      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
    />
  </Switch>
  )
}

export default Toggle