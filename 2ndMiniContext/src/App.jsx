import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import userContextProvider from './context/UserContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <userContextProvider>
      <Login />
      <Profile/>
    </userContextProvider>
  )
}

export default App
