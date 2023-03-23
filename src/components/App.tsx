import { FC, useState, useEffect, useRef, ChangeEventHandler, KeyboardEventHandler } from "react";

import { ITodo } from "../types/data";

import TodoList from "./TodoList";

const App: FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false,
            }]);
            setValue('');
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todos => todos.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    useEffect(() => {
        if (inputRef) {
            inputRef.current?.focus()
        }
    }, [])

    return (
        <div>
            <div>
                <input type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
                <button onClick={addTodo}>Add todo</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    )
}

export default App;