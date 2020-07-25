import React, { useContext } from "react";
import { Context } from "./TodoApp";

function TodoItem(props) {
  const {
    todo: { title, completed, id },
  } = props;

  const { toggleTodo, removeTodo } = useContext(Context);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span className="mx-2">{title}</span>
        <i className="red-text" onClick={(e) => removeTodo(e, id)}>
          delete
        </i>
      </label>
    </li>
  );
}

export default TodoItem;
