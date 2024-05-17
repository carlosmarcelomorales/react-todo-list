import React, {} from 'react';
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter((todo) => todo.completed === true).length;
    const totalTodos = todos.length;

    const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const newIndex = newTodos.findIndex(todo => todo.text === text);

        newTodos[newIndex].completed = true;

        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const newIndex = newTodos.findIndex(todo => todo.text === text);

        newTodos.splice(newIndex, 1);
        saveTodos(newTodos)
    }

    const addTodo = (text) => {
        todos.push({text, completed: false});
    }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            deleteTodo,
            totalTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            completeTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}