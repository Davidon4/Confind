import { createContext, useState } from "react";
import { DarkTheme, DefaultTheme } from "react-native-paper";

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white",
    text: "black",
    accent: "yellow",
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "black",
    text: "white",
  },
};

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  const toggleTheme = () => setIsThemeDark(!isThemeDark);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        isThemeDark,
        theme: isThemeDark ? darkTheme : defaultTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
