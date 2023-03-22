import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <>
      <section className="todo-list-section">
        {todos.length < 1 ? (
          <p className="info-text">There's no {textPlacer}</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
          </ul>
        )}

        <div className="todo-filter-control">
          <div className="todos-count">{leftTodoCount} items left</div>

          <div className="control-btn">
            <button className="btn" onClick={clearCompletedTodos}>
              Clear Completed
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
