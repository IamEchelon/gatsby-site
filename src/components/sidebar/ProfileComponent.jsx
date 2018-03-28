import React from 'react'
import ProfilePic from './ProfilePic'
import Icons from './Icons'

/*
-----------------------------------------------------
  Styles
-----------------------------------------------------
*/

const style = {
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    marginBottom: '30px'
  },
  titleBox: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid white',
    padding: '10px 30px',
    marginBottom: 40
  },
  title: {
    fontFamily: 'Avenir Next',
    fontWeight: '300',
    margin: '10px 0'
  }
}

/*
-----------------------------------------------------
  Styles
-----------------------------------------------------
*/

const ProfileComponent = () => (
  <div style={style.profile}>
    <ProfilePic />
    <div style={style.titleBox}>
      <h1 style={style.title}>Brent Brinkley</h1>
      <h2 style={style.title}>Front End Developer</h2>
    </div>
    <Icons />
  </div>
)

export default ProfileComponent
