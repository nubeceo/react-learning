import React,{useState} from 'react'
import { useTodo } from '../Context'

function TodoForm() {

    const [indieTodo, setindieTodo] = useState("")

    const {addTodo} = useTodo();

    const add =(e)=>{
        e.preventDefault();
        
        if(!indieTodo){
            alert("First add a Todo");
        }
        addTodo({todo: indieTodo, completed: false})
        setindieTodo("");
    }

    return (
        <form onSubmit={(e)=>add()} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setindieTodo(e.target.value)}
                value={indieTodo}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default TodoForm;