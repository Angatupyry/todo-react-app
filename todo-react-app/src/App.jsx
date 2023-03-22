import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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

function App() {
  const [themeLight, setThemeLight] = useState(true);

  return (
    <div className={`wrapper ${themeLight ? "light" : "dark"}`}>
      <div className="container">
        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        <main>
          <TodoForm />
          <TodoList todos={todos} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
