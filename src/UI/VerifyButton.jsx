import React from 'react'

function VerifyButton({text,width}) {
  return (
    <button className={`${width} verifyButton`} >{text}</button>
  )
}

export default VerifyButton