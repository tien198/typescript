class Todo {
    id: string
    text: string
    constructor(todoText: string) {
        this.id = String(Math.floor(Math.random() * (1000000 - 0 + 1)) + 0)
        this.text = todoText
    }
}

export default Todo