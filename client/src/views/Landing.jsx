import React from 'react'
import Header from '../components/Header'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom';


export default function Landing() {
  const props = useSpring({ opacity: 2, from: { opacity: 0 } })
  return <animated.div style={props}>
    <div className="App">
      <Header />
      <div className='some-page-wrapper'>
        <div className='row'>
          <div className='column'>
          </div>
        </div>
      </div>
    </div>
  </animated.div >

}
