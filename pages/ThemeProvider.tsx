import { createContext } from "react";
import { useTheme } from "../utils/hooks/useTheme";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const { themes, defaultTheme } = props;
  const [theme, setTheme] = useTheme(defaultTheme);

  const value = [theme, setTheme, themes];
  return <ThemeContext.Provider value={value} {...props} />;
}
