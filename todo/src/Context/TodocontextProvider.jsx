import React, { useState } from 'react'
import Todoconext from './Todoconext.js'



function TodocontextProvider({ children }) {


    return (
        <Todoconext.Provider value={{}}>
            {children}
        </Todoconext.Provider>
    )
}

export default TodocontextProvider