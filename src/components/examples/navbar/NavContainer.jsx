import React from 'react'
import Navbar from './Navbar'

const style = {
  width: '700px',
  height: '500px',
  borderRadius: '10',
  boxShadow: '-3px 8px 68px -30px rgba(0,0,0,0.75)',
  // WebKitBoxShadow: '-3px 8px 68px -30px rgba(0,0,0,0.75)',
  // MozBoxShadow: '-3px 8px 68px -30px rgba(0,0,0,0.75)',
  margin: '25px 0 70px 0'
}

const NavContainer = () => (
  <div css={style}>
    <Navbar />
  </div>
)

export default NavContainer
