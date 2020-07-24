import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

export const Context = React.createContext();

export default function ReactHOC() {
  const [todos, setTodos] = useState([
    // { id: 1, title: "First todo", completed: false },
    // { id: 2, title: "Second todo", completed: true },
  ]);

  const [todoTitle, setTodoTitle] = useState("");

  // useEffect(() => console.log("init"), []); ///cdm

  useEffect(() => {
    const raw = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setTodoTitle("");
    }
  };

  const removeTodo = (id) => {
    console.log("remove");
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleTodo = (id) => {
    console.log("toggle");
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <Context.Provider value={{ toggleTodo, removeTodo }}>
      <div className="container">
        <h1>Todo app</h1>

        <div className="input-field">
          <input
            type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
          />
        </div>

        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </Context.Provider>
  );
}
