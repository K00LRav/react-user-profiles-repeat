import React from 'react'
import './Header.css'
import { userData } from '../../utils/users';

function Header({userData,setUsers}) {
  
  //create state for country
  const [country, setCountry] = React.useState('')

  const handleInput = (e) => {
    // console.log(e.target.value)
    setCountry(e.target.value)
  }


  const handleSearch =() =>{
    console.log(country)
    //filter userData to get onlt the matches and store that in users
    setUsers(userData.filter(item => item.country.toLowerCase() === country.toLowerCase()))
    setCountry('')
  }
  
  const handleShow =() => {
    // console.log("Show All")
    //users is all of userData
    setUsers(userData)
  }

  return (
    <div className='header-container'>
      <button onClick={handleShow}>Show All</button>
      <div className='search-container'>
      <input onChange={handleInput} type="text" placeholder='Search Country' value={country}/>
      <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Header