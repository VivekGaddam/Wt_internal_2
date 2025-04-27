import React, { createContext, useState, useContext } from 'react';

// Create a Context
const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <h1>useContext Demo</h1>
        <ThemeButton />
        <ThemeToggleButton />
      </div>
    </ThemeContext.Provider>
  );
};

const ThemeButton = () => {
  // Access theme context value
  const { theme } = useContext(ThemeContext);
  return <button style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
    Current Theme: {theme}
  </button>;
};

const ThemeToggleButton = () => {
  // Access setTheme function from context
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    // Toggle between light and dark theme
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <button onClick={toggleTheme} style={{ marginTop: '10px' }}>
    Toggle Theme
  </button>;
};

export default App;
