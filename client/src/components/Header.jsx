import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
// import it from '../../img/itRound.png'

function Header() {
  const props = useSpring({ opacity: 2, from: { opacity: 0 } })
  return <animated.div style={props}>
    <div class="container">
      <div class="row">

        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </div>
    </div>
  </animated.div >
}


export default Header
