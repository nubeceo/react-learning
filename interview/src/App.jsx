import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phNumber, setphNumber] = useState("");
  const [email, setemail] = useState("");

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  const isEmailValid = () => {
    return emailRegex.test(email);
  }


  const handelSubmit = () => {

    if (lastName == "" && firstName == "" && phNumber == "") {
      alert("field cant be blank");
    }

    if (firstName == "") {
      alert("first name cant be blank");
    }
    if (lastName == "") {
      alert("last name cant be blank");
    }

    if (phNumber == "") {
      alert("number cant be blank")
    }
    if (phNumber.length < 10) {
      alert("phone cant be less that 10")
    }

    if (email == "") {
      alert("email cant be blank")
    }
    
    if(!isEmailValid()){
      alert("enter a valid email");
    }


  }
  
  return (
    <div>
      helo
      <div >
        <input type="text" placeholder='First Name' onChange={(e) => setfirstName(e.target.value)} value={firstName} />
        <input type="text" placeholder='Last Name' onChange={(e) => setlastName(e.target.value)} value={lastName} />
        <input type="tel" placeholder='ph no' onChange={(e) => setphNumber(e.target.value)} value={phNumber} />
        <input type="email" placeholder='email' onChange={(e) => setemail(e.target.value)} value={email} />
      </div>

      <div>
        <button onClick={() => handelSubmit()}>Submit</button>
      </div>
    </div>
  )
}

export default App
