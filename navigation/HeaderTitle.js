import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ThemeContext from "../config/ThemeContext";
import { useFonts } from "expo-font";

const HeaderTabs = ({}) => {
  const theme = useContext(ThemeContext);
  const [loaded] = useFonts({
    Lobster: require("../assets/font/Lobster-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View>
      <Text style={[styles.text, { color: theme.color }]}>
        Explore<Text style={{ color: "#FF6C00" }}>.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Lobster",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HeaderTabs;
