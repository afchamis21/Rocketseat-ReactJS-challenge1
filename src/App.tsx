import logo from "./assets/logo.svg"
import styles from "./App.module.css"
import { useState } from "react";
import { CreateNewTodoForm } from "./components/CreateNewTodoForm";
import { TodoList } from "./components/TodoList";

export interface Todo {
  id: number;
  content: string;
  done: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleNewTodo(todo: Todo) {
    setTodos([...todos, todo])
  }
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
      </header>
      <div className={styles.bodyWrapper}>
        <CreateNewTodoForm handleNewTodo={handleNewTodo} todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>

  )
}

export default App
