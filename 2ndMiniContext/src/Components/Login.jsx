import React,{useState,useCotext} from 'react'
import UserContext from '../context/UserContext'

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser}=useCotext(UserContext)

    const handleSubmit = (e)=>{

    }

    return(
        <div>
            <h2>Login</h2>
            <input 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'
            
            type="text" />
            {""}
            <input type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='username'
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login