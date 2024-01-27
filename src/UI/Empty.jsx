import React from 'react'

function Empty({resourceName,className = "m-4"}) {
  return (
    <h1 className={`text-cyan-800 font-bold text-l sm:text-2xl overflow-hidden ${className}`}>{resourceName} یافت نشد</h1>
  )
}

export default Empty