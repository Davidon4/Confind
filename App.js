import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Main from "./Main";
import { ThemeProvider } from "./config/ThemeContext";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </Provider>
  );
}
