import React, { useEffect } from 'react'
import SendOTPForm from '../features/authentication/SendOTPForm'
import CheckOTPForm from '../features/CheckOTPForm'
import { getOtp } from '../services/authServices'
import AuthContainer from '../features/authentication/AuthContainer'

function Auth() {
  return (
    <div className='container'>
       <AuthContainer/>
    </div>
  )
}

export default Auth