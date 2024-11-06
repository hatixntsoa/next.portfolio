import { useEffect } from 'react';

const useThemeToggle = () => {
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

  return { toggleTheme };
};

export default useThemeToggle;