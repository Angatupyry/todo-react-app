import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [themeLight, setThemeLight] = useState(true);

  return (
    <div className={`wrapper ${themeLight ? "light" : "dark"}`}>
      <div className="container">
        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        <main></main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
