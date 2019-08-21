import React from 'react'
import logo from '../assets/snLogo.svg'
import Header from '../components/Header'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom';

export default function Landing() {
  const props = useSpring({ opacity: 2, from: { opacity: 0 } })
  return <animated.div style={props}>
    <div className="App">
      <div className="App-header">
        <Link to="/login"><img src={logo} alt='logo' /></Link>
      </div>
    </div>
  </animated.div >

}
