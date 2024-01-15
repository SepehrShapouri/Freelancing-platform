import React from 'react'

function UserAvatar({width,user}) {
  return (
    <img
    className={`rounded-full ${width}`}
    src={user.userAvatarUrl}
    alt=""
  />
  )
}

export default UserAvatar