import { useState, useCallback, useEffect, useRef } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charecter, setCharecter] = useState(false);
  const [password, setPassword] = useState("")

  //useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (charecter) str += "!@#$%^&*(){}[]?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass);


  }, [length, number, charecter, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password).then(() => {
      toast.success("Password copied to clipboard");
    });

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, charecter, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 mt-20 flex flex-col justify-center ">

        <h1 className='text-center text-white pt-5 font-mono text-xl'>Password Generator</h1>

        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">

          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3 m-6 rounded-tl-lg rounded-bl-lg h-10 text-xl  font-mono mr-0"
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button

            onClick={copyPasswordToClipBoard}
            className='px-3 py-0.5 outline-none bg-blue-700 text-white shrink-0 cursor-pointer m-6 ml-0 rounded-tr-xl rounded-br-xl font-mono text-lg'>Copy</button>
          <ToastContainer />
        </div>

        <div className='flex text-s gap-x-2 m-3 items-center justify-center'>

          <div className='flex items-center gap-x-8 shadow-lg p-1.5'>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>




          <div className='flex items-center gap-x-1 shadow-lg p-1.5'>

            <input
              type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={() => {
                setNumber((prev) => !prev);
              }}

              className='cursor-pointer'

            />
            <label>Number</label>
          </div>





          <div className='flex items-center gap-x-1 shadow-lg p-1.5' >
            <input
              type="checkbox"
              defaultChecked={charecter}
              id='charecterInput'
              onChange={() => {
                setCharecter((prev) => !prev);
              }}

              className='cursor-pointer'

            />
            <label>Charecter</label>
          </div>

        </div>
      </div>



    </>
  )
}

export default App
