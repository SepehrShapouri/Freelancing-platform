import React from 'react'

function VerifyButton({text,width,marginTop}) {
  return (
    <button type='submit' className={`${width} ${marginTop} verifyButton`} >{text}</button>
  )
}

export default VerifyButton