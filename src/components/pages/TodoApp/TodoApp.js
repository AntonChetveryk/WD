import React, { useState } from "react";
import TodoList from "./TodoList";

export const Context = React.createContext();

function TodoApp(props) {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  const addTodo = () => {
    if (todoTitle) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
    } else alert("fill the gap");
  };

  const toggleTodo = (id) => {
    console.log(id);
  };

  const removeTodo = (e, id) => {
    e.stopPropagation();
    console.log(id);
  };

  return (
    <Context.Provider value={{ toggleTodo, removeTodo }}>
      <div>
        <button className="btn btn-dark mr-2" onClick={addTodo}>
          Add todo
        </button>
        <input
          placeholder="add todo"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <h1>Todo List</h1>
        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}

export default TodoApp;
