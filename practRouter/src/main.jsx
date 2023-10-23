import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='about' element={<About/>}/>
      <Route  path='contact' element={<Contact/>} />
    </Route>
    
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* this is where the router along with the page component is beign returned */}
  <RouterProvider router={router}/>

  </React.StrictMode>,
)


