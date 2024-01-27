import { createContext, useContext, } from "react";



export const todoContext = createContext({

    todos: [

        {
            id: 1,
            todoMsg: "hello ji",
            completed: false,

        },


    ],
    adTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComple: (id) => { }

});


export const useTodo = () => {
    return useContext(todoContext)
}

export const todoProvider = todoContext.Provider

