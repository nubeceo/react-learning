import React, { useEffect } from 'react'
import { useState } from 'react'

function Github() {

  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('https://api.github.com/users/deepcs2004')
    .then((Response)=>Response.json())
    .then((Response)=>setData(Response))
  },[])


  return (
    <div className='text-center text-4xl bg-slate-900 text-white font-mono'>

      Github
    </div>
  )
}



export default Github