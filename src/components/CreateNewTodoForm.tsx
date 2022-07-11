import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../App";

import styles from "./CreateNewTodoForm.module.css"


interface CreateNewTodoFormProps {
    handleNewTodo: (todo: Todo) => void;
    todos: Todo[]
}

export function CreateNewTodoForm({ handleNewTodo, todos }: CreateNewTodoFormProps) {
    const [todoText, setTodoText] = useState('')

    function onCreateNewTodo(event: FormEvent) {
        event.preventDefault()
        if (todoText) {
            const newTodo = {
                id: todos.length + 1,
                content: todoText,
                done: false
            }
            handleNewTodo(newTodo)
        }

    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setTodoText(event.target.value)
    }
    return (
        <form className={styles.newTodoForm}>
            <input type="text" placeholder="Adicione uma nova tarefa" onChange={handleInputChange} />
            <button type="submit" onClick={onCreateNewTodo}>Criar <PlusCircle size={24} /></button>
        </form>
    )
}