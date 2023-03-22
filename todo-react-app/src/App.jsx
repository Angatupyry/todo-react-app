import { useState } from "react";
import "./index.css";
import Header from "./components/Header";

function App() {
  const [themeLight, setThemeLight] = useState(true);

  return (
    <div className={`wrapper ${themeLight ? "light" : "dark"}`}>
      <div className="container">
        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
      </div>
    </div>
  );
}

export default App;
