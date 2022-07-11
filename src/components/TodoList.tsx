import { Todo } from "../App"
import styles from "./TodoList.module.css"
import clipboard from "../assets/clipboard.svg"
import { TodoCard } from "./TodoCard"

interface TodoListProps {
    setTodos: (todos: Todo[]) => void;
    todos: Todo[]
}

export function TodoList({ todos, setTodos }: TodoListProps) {
    const doneTodosAmount = todos.reduce((acc, todo) => (todo.done ? acc + 1 : acc), 0)

    function handleChangeTodoState(target_todo: Todo) {
        target_todo.done = !target_todo.done
        const unchangedTodos = todos.filter(todo => todo.id !== target_todo.id)
        const todosAfterChange = [...unchangedTodos, target_todo].sort((a, b) => a.id - b.id);

        setTodos(todosAfterChange)
    }

    function handleDeleteTodo(target_todo: Todo) {
        const todosAfterChange = todos.filter(todo => todo.id !== target_todo.id)
        setTodos(todosAfterChange)
    }

    return (
        <>
            <header className={styles.todoListHeader}>
                <div className={styles.totalTodos}>
                    <span>Tarefas criadas</span>
                    <span>{todos.length}</span>
                </div>
                <div className={styles.doneTodos}>
                    <span>Concluídas</span>
                    <span>{doneTodosAmount}</span>
                </div>
            </header>
            <section>
                {todos.length ?
                    <>
                        {
                            todos.map(todo => {
                                return (
                                    <TodoCard
                                        todo={todo}
                                        key={todo.id}
                                        handleChangeTodoState={handleChangeTodoState}
                                        handleDeleteTodo={handleDeleteTodo}
                                    />
                                )
                            })
                        }</>
                    :
                    <div className={styles.noTodosCreatedTab}>
                        <img src={clipboard} alt="Prancheta" width={56} />
                        <b>Você ainda não tem tarefas cadastradas</b>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                }
            </section>
        </>
    )
}