import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Details from "../screens/Details";
import HeaderTab from "./HeaderTab";
import HeaderTitle from "./HeaderTitle";

const Stack = createNativeStackNavigator();

export default function ScreenStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerShadowVisible: false,
            headerRight: () => <HeaderTab />,
            headerLeft: () => <HeaderTitle />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitleAlign: "center",
            title: "Details",
            headerShadowVisible: false,
            headerBackTitle: "Back",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
