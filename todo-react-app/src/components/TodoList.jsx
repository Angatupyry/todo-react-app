import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <>
      <section className="todo-list-section">
        {todos.length < 1 ? (
          <p className="info-text">There's no {textPlacer}</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} todos={todos} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default TodoList;
