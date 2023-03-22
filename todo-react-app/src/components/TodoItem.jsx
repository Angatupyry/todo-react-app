import React, { useState } from "react";
import IconCheck from "../assets/images/icon-check.svg";

const TodoItem = ({ todo }) => {
  const [mutableTodo, setMutableTodo] = useState(todo);

  const toggleCompleted = () => {
    setMutableTodo({ ...mutableTodo, completed: !mutableTodo.completed });
  };

  return (
    <li className={`${mutableTodo.completed ? "completed" : ""}`}>
      <label htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>
      <input
        id={`todoCheckbox-${todo.id}`}
        type="checkbox"
        name="completed-checkbox"
      />
      <div className="checkbox-border-wrap">
        <span className="checkbox" onClick={toggleCompleted}>
          {mutableTodo.completed ? <img src={IconCheck} alt="Completed" /> : ""}
        </span>
      </div>
      <p>{mutableTodo.content}</p>
    </li>
  );
};

export default TodoItem;
