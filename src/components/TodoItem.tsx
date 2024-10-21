import { MouseEvent } from "react";

function TodoItem(props: { text: string, removeTodo: () => void }) {
    const { text, removeTodo } = props
    return <li onClick={removeTodo}>{text}</li>
}

export default TodoItem;