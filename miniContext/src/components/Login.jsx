import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handelSubmit = (e) => {
        e.preventDefault()

        setUser({ username, password })
    }


    return (
        <div className='flex  flex-col items-center'>
            <h2 className='text-white text-lg  '>Login</h2>

            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='username' />

            <br />
            <input type='password' onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='password'
            />

            <br />

            <button className='  rounded p-2 text-yellow-400 bg-slate-600' onClick={handelSubmit}>Submit</button>



        </div>
    )
}

export default Login