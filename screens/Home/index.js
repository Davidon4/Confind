import React, { useContext, useEffect, useState, useRef } from "react";
import { Text, View } from "react-native";
import Search from "../../components/Search";
import ThemeContext from "../../config/ThemeContext";
import List from "../List";
import { styles } from "./styles";

const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.textContainer, { backgroundColor: theme.background }]}>
      <Search />
      <List />
    </View>
  );
};

export default Home;
