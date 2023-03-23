import { FC } from "react"
import { ITodo } from "../types/data"

interface ITodoItemProps extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};

const TodoItem: FC<ITodoItemProps> = (props) => {
    const { id, title, complete, removeTodo, toggleTodo } = props;

    return (
        <div>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
            <span
                style={{
                    display: 'inline-block',
                    margin: "0 10px"
                }}
            >
                {title}
            </span>
            <button
                onClick={() => removeTodo(id)}
                style={{
                    background: "transparent",
                    border: "none",
                    color: "red",
                    fontSize: "20px"
                }}
            >
                x
            </button>
        </div>
    )
}

export default TodoItem;