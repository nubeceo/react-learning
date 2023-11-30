import React,{useState} from 'react'

  export  const UserContext = React.createContext();

    const userContextProvider = ({children})=>{
        const [user,setUser]=useState(null)

        return(
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        )
    }
    




export default userContextProvider;