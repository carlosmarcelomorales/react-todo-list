import React from 'react';
import './TodoCounter.css';
import {TodoContext} from "../TodoContext";

function TodoCounter() {

    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    if (completedTodos.length === totalTodos) {
        return (
            <h1 className="TodoCounter">
                Has completado todos los todos!
            </h1>
        )
    }
    return (
        <h1 className="TodoCounter">
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
        </h1>
    );
}

export{TodoCounter};
