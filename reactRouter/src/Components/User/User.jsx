import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
  const {userid}=  useParams()


  return (
    <div className='bg-slate-900 text-white text-center text-4xl font-mono'>User:{userid}</div>
  )
}

export default User