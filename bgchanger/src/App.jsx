import { useState } from "react"


function App() {
  const [color, setColor] = useState("grey");

  
  return (
    <>
      <div className="w-full h-screen duration-200 flex justify-center items-center" style={{ backgroundColor: color }}>


        <div className="font-black text-4xl"></div>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">



          <div  className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">

            <button  onClick={() => setColor("red")} className="outline-none px-4 font-black py-1 rounded-3xl bg-red-700 ">RED</button>



            <button onClick={() => setColor("blue")} className="outline-none px-4 font-black py-1 rounded-3xl bg-blue-700">BLUE</button>



            <button onClick={() => setColor("green")} className="outline-none px-4 font-black py-1 rounded-3xl bg-green-700">GREEN</button>



            <button onClick={() => setColor("yellow")} className="outline-none px-4 font-black py-1 rounded-3xl bg-yellow-400">YELLOW</button>



            <button onClick={() => setColor("purple")} className="outline-none px-4 font-black py-1 rounded-3xl bg-purple-700">PURPLE</button>
          </div>


        </div>

      </div>

    </>
  )
}

export default App
