import { Todo } from "../App"
import styles from "./TodoCard.module.css"
import { Check, Trash } from "phosphor-react";

interface TodoCardProps {
    todo: Todo;
    handleChangeTodoState: (todo: Todo) => void;
    handleDeleteTodo: (todo: Todo) => void;
}

export function TodoCard({ todo, handleChangeTodoState, handleDeleteTodo }: TodoCardProps) {
    function onChangeTodoState() {
        handleChangeTodoState(todo)
    }
    function onDeleteTodo() {
        handleDeleteTodo(todo)
    }

    return (
        <div className={styles.todoCard}>
            {todo.done
                ? <button onClick={onChangeTodoState} className={styles.buttonClosedTodo}><Check weight="bold" /></button>
                : <button onClick={onChangeTodoState} className={styles.buttonOpenTodo}></button>
            }
            <p className={todo.done ? styles.doneTodoText : styles.openTodoText}>{todo.content}</p>
            <button className={styles.deleteButton} onClick={onDeleteTodo}><Trash size={24} /></button>
        </div>
    )
}