import React from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import {TodoError} from "../TodoError";
import {EmptyTodos} from "../EmptyTodos";
import {TodoContext} from "../TodoContext";
import {TodoLoading} from "../TodoLoading";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";

function AppUI() {

    const {
        deleteTodo,
        filteredTodos,
        completeTodo,
        loading,
        error,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {loading && <><TodoLoading/><TodoLoading/><TodoLoading/></>}
                {error && <TodoError/>}
                {(!loading && filteredTodos.length === 0) && <EmptyTodos/>}

                {filteredTodos.map((todo) =>
                    <TodoItem
                        text={todo.text}
                        key={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            </TodoList>


            <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
            {openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}
        </React.Fragment>
    );
}

export {AppUI}