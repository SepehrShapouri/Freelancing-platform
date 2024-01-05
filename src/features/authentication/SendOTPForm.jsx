import React, { useState } from 'react'
import VerifyButton from '../../UI/VerifyButton'

function SendOTPForm() {
    const [phoneNumber,setPhoneNumber] = useState("")
  return (
    <div className="container max-h-screen">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl mt-44 space-y-3">
        <h3 className='text-xl font-semibold'>ورود | ثبت نام</h3>
        <p className='text-l'>خوش آمدید!</p>
        <form className='space-y-4'>
        <label htmlFor='phoneNumber'>لطفا شماره موبایل خود را وارد کنید</label>
        <input type='number' className='w-full h-10 rounded-lg bg-gray-100 p-4 text-secondary-600 hover:border-2 hover:border-gray-200 focus:border-2 focus:border-cyan-900 focus:transition-all focus:ease-in hover:transition-all hover:ease-in' name='phoneNumber' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
        <VerifyButton text="ارسال کد تایید"/>
        </form>
        </div>
    </div>
  )
}

export default SendOTPForm