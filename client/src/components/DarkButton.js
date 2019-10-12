import React, { useState } from 'react';
import useDarkMode from '../utils/useDarkMode'

const DarkButton = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <button 
        onClick={toggleMode} 
        className={darkMode ? 'toggle toggled' : 'toggle'}>
        Dark Mode
    </button>
  )
};

export default DarkButton