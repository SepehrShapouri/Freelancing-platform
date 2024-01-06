import React from 'react'
import SendOTPForm from '../features/authentication/SendOTPForm'
import CheckOTPForm from '../features/CheckOTPForm'

function Auth() {
  return (
    <div className='container'>
        <SendOTPForm/>
        <CheckOTPForm/>
    </div>
  )
}

export default Auth