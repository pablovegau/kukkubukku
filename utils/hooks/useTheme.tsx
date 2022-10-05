import { useEffect, useState } from "react";

export const useTheme = (defaultTheme) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem("theme") || undefined;

    if (localStorageTheme) {
      document.body.dataset.theme = localStorageTheme;
      setTheme(localStorageTheme);
    } else {
      setTheme(defaultTheme);
    }
  }, [defaultTheme]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};
