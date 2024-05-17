import React from 'react';
import './TodoForm.css'
import {TodoContext} from "../TodoContext";

function TodoForm() {

    const {addTodo, setOpenModal} = React.useContext(TodoContext);
    const [ newTodoValue, setNewTodoValue ] = React.useState('');

    console.log(newTodoValue);

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (event) => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Write the new TODO</label>
            <textarea placeholder="Write TODO"
                      value={newTodoValue}
                      onChange={onChange}
            >

            </textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button--cancel" type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button className="TodoForm-button--add" type="submit">Add</button>
            </div>
        </form>
    )
}

export {TodoForm}