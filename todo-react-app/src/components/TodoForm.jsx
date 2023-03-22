import { useState } from "react";
const todos = [
  { id: 1, content: "Tomar agua", completed: true },
  { id: 2, content: "Finalizar práctica de estados y props", completed: false },
  { id: 3, content: "Tomar agua", completed: false },
  {
    id: 4,
    content: "Compartir lo aprendido con algún compañero",
    completed: false,
  },
  { id: 5, content: "Probar pizza italiana", completed: false },
  { id: 6, content: "Completar el desafío del sprint 3", completed: false },
];

const generateId = (array) => {
  const ids = array.map((item) => item.id);
  return Math.max(...ids) + 1;
};

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput) {
      const newTodo = {
        id: generateId(todos),
        content: todoInput.trim(),
        completed: false,
      };

      setTodoInput("");
      console.log(newTodo);
    }
  };

  return (
    <div className="form-control">
      <div className="checkbox-border-wrap">
        <span className="checkbox"></span>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Add New Todo</label>
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          id="todoInput"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={handleChange}
        />
        <button id="submitNewTodo" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
