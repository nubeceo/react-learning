import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    if(count>=1){
      setCount(count - 1);
    }
  }
    
  
  return (
    <>
      <h1>Hello World</h1>
      <h3>counter : {count}</h3>
      <button onClick={increase} >Increase</button>
      <br />
      <br />
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
