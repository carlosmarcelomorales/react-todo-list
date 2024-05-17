import React from 'react';
import './TodoLoading.css';

function TodoLoading() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-CompleteIcon"></span>
            <p className="LoadingTodo-text"></p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    )
}

export {TodoLoading};