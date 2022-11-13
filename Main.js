import React, { useContext } from "react";
import AppNavigator from "./navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import ThemeContext from "./config/ThemeContext";

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;
