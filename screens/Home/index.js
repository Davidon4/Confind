import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home Screen!!</Text>
    </View>
  );
}

export default Home;
