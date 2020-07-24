import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} setTodos={setTodos} todos={todos} />
      ))}
    </ul>
  );
}
