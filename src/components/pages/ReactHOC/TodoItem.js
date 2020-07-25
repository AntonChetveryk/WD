import React, { useContext } from "react";
import { Context } from "./ReactHOC";

export default function TodoItem({ title, id, completed }) {
  // const [checked, setCheked] = useState(completed);
  const { toggleTodo, removeTodo } = useContext(Context);

  const cls = ["todo"];

  if (completed) {
    cls.push("completed");
  }

  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(e, id)}
        />
        <span>{title}</span>

        <i className="material-icons red-text" onClick={() => removeTodo(id)}>
          delete
        </i>
      </label>
    </li>
  );
}
