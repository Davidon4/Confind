import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import CountryDetails from "../screens/CountryDetails";
import List from "../screens/List";
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
          name="CountryDetails"
          component={CountryDetails}
          options={({ route }) => ({
            title: route?.params?.name?.common,
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerBackTitle: "Back",
          })}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{
            headerTitleAlign: "center",
            title: "List",
            headerShadowVisible: false,
            headerBackTitle: "Back",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
