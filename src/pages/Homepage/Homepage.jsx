import React from 'react'
import PersonCard from '../../components/PersonCard/PersonCard'
import './Homepage.css'

function Homepage({users}) {



  return (
    <div className='homepage-container'>
      <h1>User Directory</h1>
      <div className="person-container">
          {
            // users.map(item=> <p>{item.username}</p>)
            users.map(item=><PersonCard person={item}/>)
          }
      </div>
      </div>
  )
}

export default Homepage