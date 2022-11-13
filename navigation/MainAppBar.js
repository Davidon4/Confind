import React, { useContext } from "react";
import { Appbar } from "react-native-paper";
import ThemeContext from "../config/ThemeContext";

const MainAppBar = React.memo(({ navigation, route, back }) => {
  const { toggleTheme } = useContext(ThemeContext);

  const { name } = route?.params || {};

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={name ? name : "Where in the world?"} />
      {!route.params && (
        <Appbar.Action icon="theme-light-dark" onPress={() => toggleTheme()} />
      )}
    </Appbar.Header>
  );
});

export default MainAppBar;
