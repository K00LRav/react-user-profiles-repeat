import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import { userData } from './utils/users'

function App() {
  //create state for users
  const[users, setUsers] = useState([])
 
// console.log(userData)
  return (
    <div className="App">
      <Header userData={userData} setUsers={setUsers}/>
      <Homepage users={users} />
      <Footer />
    </div>
  )
}

export default App
