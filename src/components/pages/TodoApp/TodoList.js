import React from "react";
import TodoItem from "../TodoApp/Todoitem";

function TodoList(props) {
  const { todos } = props;
  return (
    <>
      <ol>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ol>
    </>
  );
}

export default TodoList;
