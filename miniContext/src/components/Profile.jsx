import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'



function Profile() {

    const { user } = useContext(UserContext)

    if (!user) return <div className='text-white text-3xl font-mono'>Please Login</div>

    
    return <div className='text-white text-3xl font-mono'>Welcome {user.username}</div>
}

export default Profile