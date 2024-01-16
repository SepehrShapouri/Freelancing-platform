import React from 'react'

function UserAvatar({width,user}) {
  return (
    <img
    className={`rounded-full ${width}`}
    src={`${user.userAvatarUrl || "/src/assets/images/avatar.png"}`}
    alt=""
  />
  )
}

export default UserAvatar