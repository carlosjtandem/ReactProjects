import React from "react";
import { ThemeContext } from "../App";

export default function ConfigurationButton() {
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme }) => <button onClick={toggleTheme}>Toggle Theme</button>}
    </ThemeContext.Consumer>
  );
}
