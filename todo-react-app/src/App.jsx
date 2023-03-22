import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const data = [
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

function App() {
  const [themeLight, setThemeLight] = useState(true);
  const [todos, setTodos] = useState(data);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case "active":
          return setFilteredTodos(todos.filter((todo) => !todo.completed));

        case "completed":
          return setFilteredTodos(todos.filter((todo) => todo.completed));

        default:
          return setFilteredTodos(todos);
      }
    };
    handleFilter();
  }, [todos, filterStatus]);

  return (
    <div className={`wrapper ${themeLight ? "light" : "dark"}`}>
      <div className="container">
        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        <main>
          <TodoForm todos={todos} setTodos={setTodos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
