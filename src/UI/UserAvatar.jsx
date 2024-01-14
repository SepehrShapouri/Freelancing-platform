import React from 'react'

function UserAvatar({width,user}) {
  return (
    <img
    className={`rounded-full ${width}`}
    src={`${
      user.gender === "MALE"
        ? "https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?w=1060&t=st=1705246239~exp=1705246839~hmac=a55790a6ceedec7216e2bf2bd48049fdcf7bfe47fe9b3b0cf6aec76b9ee82c4c"
        : "https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?w=1060&t=st=1705245522~exp=1705246122~hmac=4480d684349ad160e4b91fdc823e3ab6f3590cd7a2550096a30cc2e96653952d"
    }`}
    alt=""
  />
  )
}

export default UserAvatar