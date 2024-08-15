import React from 'react';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('app-theme') || defaultTheme);

  React.useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark'); //theme
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme] as const;
};
