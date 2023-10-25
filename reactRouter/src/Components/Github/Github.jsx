import React, { useEffect } from 'react'
import { useState } from 'react'

function Github() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/deepcs2004')
      .then((Response) => Response.json())
      .then((Response) => setData(Response))
  }, [])

// return
  
  return (
    <div className='text-center text-3xl bg-slate-900 text-white font-mono p-3 flex flex-wrap justify-evenly'>
      <div className='w-52'>
        <img src={data.avatar_url} />
      </div>

      <div className='m-2'>

        <div className='m-2'>Name: {data.name}</div>

        <div className='m-2'>Github Followers: {data.followers}</div>

        <div className='m-2'>Public Repository: {data.public_repos}</div>

        <div className='m-2'>Twitter: {data.twitter_username}</div>
      </div>

    </div>
  )
}



export default Github