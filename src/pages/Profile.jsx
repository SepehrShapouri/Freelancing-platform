import React from 'react'
import useUser from '../features/authentication/authHooks/useUser'
import { CiUser } from 'react-icons/ci'

function Profile() {
    const {data} = useUser()
    console.log(data)
  return (
    <div className=' w-full h-full flex items-start justify-center  bg-slate-50'>
        <div className="flex bg-white w-[350px] h-[400px] rounded-xl mt-[80px] shadow-lg">
        </div>
    </div>
  )
}

export default Profile