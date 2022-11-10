import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ThemeContext from "../config/ThemeContext";

const HeaderTabs = ({}) => {
  const theme = useContext(ThemeContext);
  return (
    <View>
      <Text style={[styles.text, { color: theme.color }]}>Explore.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Ubuntu_400Regular",
  },
});

export default HeaderTabs;
