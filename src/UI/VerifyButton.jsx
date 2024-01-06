import React from 'react'

function VerifyButton({text,width}) {
  return (
    <button type='submit' className={`${width} verifyButton`} >{text}</button>
  )
}

export default VerifyButton