import { useState, useEffect } from 'react'
import './App.css'
import { todoProvider, } from './Context'


function App() {

  const [todos, setTodo] = useState([])

  // storing the new todos
  const addtodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  // updating any existing todo
  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }


  // deleting any todo
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }


  // toggling any todo completed or not
  const toggleComple = (id) => {
    setTodo((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !completed } : prevTodo))
  }


  // restoring data from local storage in todo
  useEffect(() => {

    const getTodos = JSON.parse(localStorage.getItem("todos"));

    if (getTodos && getTodos.length > 0) {
      setTodo(getTodos);
    }

  }, [])

  
  // setting data in local storage 
  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])

  return (
    <todoProvider value={{ todos, addtodo, updateTodo, deleteTodo, toggleComple }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

          <div className="mb-4">
            {/* Todo form goes here */}

          </div>

          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

          </div>

        </div>
      </div>
    </todoProvider>
  )
}

export default App
