import { FC } from "react"

import { ITodo } from "../types/data";

import TodoItem from "./TodoItem";

interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: FC<ITodoListProps> = (props) => {
    const { items, removeTodo, toggleTodo } = props;

    return (
        <div>
            {items.map(todo => <TodoItem key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo} {...todo}/>)}
        </div>
    )
}

export default TodoList;