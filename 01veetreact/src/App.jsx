import { useState } from "react";


const game = ["football", "basketball", "cricket"];
const days = ["weekends", "weekdays"];

const [gameplay, setGameplay] = useState("");
function App() {
  return (
    <>
      <h1>which game?</h1>
      {
        game.map((value) => {
          return (
            <>
              <input value={value} onChange={setGameplay((e)=>{e.target.value})}  type="radio" id={value} />

              <label for={value} value={value}>{value}</label>
              <br /><br />
            </>
          )
        })
      }


    </>
  )
}

export default App
