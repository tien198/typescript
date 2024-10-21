import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import { TodoProvider } from './store/todo-context';

const initialTodos = [
  new Todo('Learn React'),
  new Todo('Learn TypeScript')
]
function App() {

  return (
    <div className='text-center'>
      <TodoProvider>
        <NewTodo />
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;
