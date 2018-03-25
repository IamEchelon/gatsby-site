import React from 'react'
import Link from 'gatsby-link'
import ProfileComponent from './ProfileComponent'

/*
-----------------------------------------------------
 Styles Are here and awesome 
-----------------------------------------------------
*/

const style = {
  height: '100%',
  backgroundColor: 'gray',
  position: 'fixed',
  zIndex: 1,
  top: 0,
  left: 0,
  margin: 'auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center'
}

/*
-----------------------------------------------------
 Our fanstastic Jsx Object
-----------------------------------------------------
*/

const Sidebar = () => (
  <div style={style}>
    <ProfileComponent />
    <Link to="/">Home</Link>
    <Link to="/posts/">Blog Posts</Link>
  </div>
)

export default Sidebar
