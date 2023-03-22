import SwitchToDarkIcon from "./assets/images/icon-moon.svg";
import "./index.css";

function App() {
  return (
    <div className="wrapper light">
      <div className="container">
        <header>
          <h1>TODO</h1>
          <button className="btn switch-theme-btn">
            <img src={SwitchToDarkIcon} alt="Light Theme" />
          </button>
        </header>
      </div>
    </div>
  );
}

export default App;
