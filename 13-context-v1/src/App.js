import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import ConfigurationButton from "./components/ConfigurationButton";

// Create a Context
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <Content />
      <ConfigurationButton />
    </ThemeContext.Provider>
  );
}

export default App;
