import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import logo from '../assets/logo.png'

function Header() {
  const props = useSpring({ opacity: 2, from: { opacity: 0 } })
  return <animated.div style={props}>
    <div class="header">

      <img src={logo} />
      <Link to="/login">login</Link>

    </div>
  </animated.div >
}


export default Header
