import React from 'react'

function VerifyButton({text}) {
  return (
    <button className='w-full bg-cyan-800 text-white h-10 rounded-lg hover:bg-cyan-700 hover:transition-all hover:ease-in hover:duration-100 transition-all ease-in duration-75' >{text}</button>
  )
}

export default VerifyButton