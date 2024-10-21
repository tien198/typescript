import React, { MouseEvent, useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../store/todo-context';

function Todos() {
    const { items, removeTodo } = useContext(TodoContext)

    return (
        <ul>
            {items.map(i => (
                <TodoItem key={i.id} text={i.text} removeTodo={removeTodo.bind(null, i.id)} />
            ))}
        </ul>
    )
}

export default Todos;

