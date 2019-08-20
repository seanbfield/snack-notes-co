import React from 'react'
import IdeasContainer from './IdeasContainer.jsx'

export default function Home(props) {
  return (
    <div>
      <IdeasContainer
        currentUser={props.currentUser}
      />
    </div>
  )
}
