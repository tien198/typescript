import React, { createContext, ReactNode, useState } from "react";
import Todo from "../models/todo";

type todoContextType = {
    items: Todo[]
    addTodo: (text: string) => void
    removeTodo: (id: string) => void
}
export const TodoContext = createContext<todoContextType>({
    items: [],
    addTodo: (text: string) => { },
    removeTodo: (id: string) => { }
})


export function TodoProvider(props: { children: ReactNode }) {
    const [items, setItems] = useState<Todo[]>([])

    function addTodo(text: string) {
        setItems(prev => [...prev, new Todo(text)])
    }
    function removeTodo(id: string) {
        setItems(prev => prev.filter(i => i.id !== id))
    }

    const contextValue: todoContextType = {
        items, addTodo, removeTodo
    }
    return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
}