import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(15)

  const update = () => {
    console.log(Counter + 1);
    setCounter(Counter + 1);

  }

  const remove = () => {
    if(Counter>=1){
      console.log(Counter-1);
      setCounter(Counter-1);
    }
    
  }
  return (
    <>
      <h1>hello world</h1>

      <h3>value: {Counter}</h3>

      <button onClick={update}>add value</button>
      <br />
      <br />
      <button onClick={remove}>remove value</button>

    </>
  )
}

export default App
