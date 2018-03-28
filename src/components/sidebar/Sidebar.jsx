import React from 'react'
import Link from 'gatsby-link'
import ProfileComponent from './ProfileComponent'

/*
-----------------------------------------------------
 Styles
-----------------------------------------------------
*/

const style = {
  height: '100%',
  // backgroundImage: 'linear-gradient(to right, DarkSlateBlue, Tomato)',
  backgroundColor: 'DarkSlateBlue',
  position: 'fixed',
  zIndex: 1,
  top: 0,
  left: 0,
  margin: 'auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  '@media only screen and (max-width: 600px)': {
    backgroundColor: 'green'
  }
}

const linkColor = { color: 'white' }

/*
-----------------------------------------------------
 Render
-----------------------------------------------------
*/

const Sidebar = () => (
  <div css={style}>
    <ProfileComponent />
    <Link to="/" css={linkColor}>
      Home
    </Link>
    <Link to="/posts" css={linkColor}>
      Blog
    </Link>
    <Link to="/Work" css={linkColor}>
      Work
    </Link>
  </div>
)

export default Sidebar
