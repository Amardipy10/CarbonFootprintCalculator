import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggleButton = ({ theme, toggleTheme }) => (
  <div className="position-absolute top-0 end-0 p-3">
    <button onClick={toggleTheme} className="btn btn-secondary rounded-circle p-2">
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  </div>
);

export default ThemeToggleButton;