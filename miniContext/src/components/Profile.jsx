import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'




function Profile() {

    const{user} = useContext(UserContext)

    if(!user) return <h1 className='text-white text-2xl'>Please Login</h1>
    return(
        <div className='text-3xl text-yellow-400'> Welcome {user.username}</div>
    )

}

export default Profile