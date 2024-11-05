'use client';

import { useEffect } from 'react';

const ThemeToggler = () => {
  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      document.body.classList.add('light');
    }
  }, []);

  return (
    <button onClick={toggleTheme} className="theme-toggler">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM205.5-434.5h-171v-91h171v91Zm720 0h-171v-91h171v91Zm-491-320v-171h91v171h-91Zm0 720v-171h91v171h-91ZM255.76-641.87 147.35-746.52l64.41-67.13 104.13 107.17-60.13 64.61Zm492.48 495.52L643.11-254.52 704-317.65l108.65 104.17-64.41 67.13ZM642.35-704l104.17-108.65 67.13 64.41-107.17 104.13L642.35-704Zm-496 492.24 108.17-105.13L317.65-256 213.48-147.35l-67.13-64.41Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M479.96-116.41q-151.48 0-257.51-106.04-106.04-106.03-106.04-257.51 0-151.47 106.05-257.67Q328.51-843.83 480-843.83q13.28 0 26.3.88 13.03.88 25.55 2.88-38.13 29.96-61.08 75.15-22.94 45.18-22.94 97.27 0 91.69 64.32 155.88 64.33 64.18 156.22 64.18 52.61 0 97.41-22.82 44.81-22.83 74.52-60.96 1.77 12.52 2.65 25.23.88 12.72.88 25.9 0 151.44-106.2 257.63-106.2 106.2-257.67 106.2Z"/></svg>
    </button>
  );
};

export default ThemeToggler;