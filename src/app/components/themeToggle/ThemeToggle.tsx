import React from "react";
import themeToggleStyles from "./ThemeToggle.module.css";

interface Props {
  setTheme: (value: string) => void;
}

const ThemeToggle: React.FC<Props> = ({ setTheme }) => {
  const [localTheme, setLocalTheme] = React.useState("light");

  const toggleTheme = () => {
    setLocalTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    setTheme(localTheme);
  }, [localTheme]);

  return (
    <label className={themeToggleStyles.theme_switcher}>
      <input type="checkbox" id="theme-checkbox" onChange={toggleTheme} hidden />
      <div className={themeToggleStyles.slider}>
        <div className={themeToggleStyles.icons}>
          <span className={themeToggleStyles.sun}>☀️</span>
          <span className={themeToggleStyles.moon}>🌙</span>
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;
