import React, { useState, useEffect } from "react";
import AppNavigator from "./navigation/AppNavigator";
import { EventRegister } from "react-native-event-listeners";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);
  return (
    <NavigationContainer theme={mode === true ? DefaultTheme : DarkTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
