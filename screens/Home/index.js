import React, { useContext } from "react";
import { View, Text } from "react-native";
import ThemeContext from "../../config/ThemeContext";
import { styles } from "./styles";

function Home() {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.textContainer, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.color }]}>
        This is the Home Screen!!
      </Text>
    </View>
  );
}

export default Home;
