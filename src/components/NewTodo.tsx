import React, { FormEvent, useContext, useRef } from 'react';
import { TodoContext } from '../store/todo-context';



function NewTodo() {
    const { addTodo } = useContext(TodoContext)

    const todoTextInputRef = useRef<HTMLInputElement>(null)

    function submit(e: FormEvent) {
        e.preventDefault()
        const value = todoTextInputRef.current?.value

        if (value?.trim().length === 0) {
            return
        }
        addTodo(value!);
    }
    return (
        <form onSubmit={submit}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInputRef}
                className='border rounded-sm' />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;