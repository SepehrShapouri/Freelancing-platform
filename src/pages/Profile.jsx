import React from 'react'
import useUser from '../features/authentication/authHooks/useUser'
import { CiUser } from 'react-icons/ci'

function Profile() {
    const {data} = useUser()
    console.log(data)
  return (
    <div className=' w-full h-full flex items-start justify-center  bg-gradient-to-br from-sky-50 to-sky-100'>
        <div className="flex bg-white w-[350px] h-[400px] sm:w-[600px] sm:h-[300px] rounded-xl mt-[80px] shadow-lg items-center p-4 flex-col">
            <span className='mt-6'>
            <img className='rounded-full w-[100px]' src={`${data.user.gender === "MALE" ? "https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?w=1060&t=st=1705246239~exp=1705246839~hmac=a55790a6ceedec7216e2bf2bd48049fdcf7bfe47fe9b3b0cf6aec76b9ee82c4c" : "https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?w=1060&t=st=1705245522~exp=1705246122~hmac=4480d684349ad160e4b91fdc823e3ab6f3590cd7a2550096a30cc2e96653952d" }`} alt="" />
            </span>
            <span className='flex flex-col items-center'>
                <h1 className='font-semibold text-cyan-950 mt-4'>{data.user.name}</h1>
                <p className='text-xs text-gray-400'>{data.user.email}</p>
            </span>
            <span>
                <p  className='text-cyan-800 font-bold mt-4'>{data.user.role == "OWNER" ? "کارفرما" : "فری لنسر"}</p>
            </span>
        </div>
    </div>
  )
}

export default Profile