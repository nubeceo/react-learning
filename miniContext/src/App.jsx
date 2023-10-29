import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {

  return (
    
    <UserContextProvider>
      <div className=' h-full flex flex-col justify-center items-center '>
      <Profile/>
      <br />
      <Login/>
      </div>
    </UserContextProvider>
    
  )
}

export default App
