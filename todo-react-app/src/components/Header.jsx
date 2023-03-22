import SwitchToDarkIcon from "../assets/images/icon-moon.svg";
import SwitchToLightIcon from "../assets/images/icon-sun.svg";

const Header = ({ themeLight, setThemeLight }) => {
  return (
    <header>
      <h1>TODO</h1>
      <button
        className="btn switch-theme-btn"
        onClick={() => setThemeLight(!themeLight)}
      >
        <img
          src={themeLight ? SwitchToDarkIcon : SwitchToLightIcon}
          alt="Light Theme"
        />
      </button>
    </header>
  );
};

export default Header;
