import React from 'react'
import me from '../../static/img/profile1.jpg'

const imgStyle = {
  borderRadius: '50%',
  marginBottom: 40,
  width: '150px'
}

const ProfilePic = () => (
  <div>
    <img style={imgStyle} src={me} alt="" />
  </div>
)

export default ProfilePic
