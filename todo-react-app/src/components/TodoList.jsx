import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoFilterControl from "./TodofilterControl";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  filterStatus,
  setFilterStatus,
}) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilterStatus("all");
  };

  return (
    <>
      <section className="todo-list-section">
        {filteredTodos.length < 1 ? (
          <p className="info-text">
            There's no {filterStatus === "completed" ? "closed task" : "task"}
          </p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
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

          <div className="control-btn group filter-control-for-desktop">
            <TodoFilterControl
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          </div>

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
