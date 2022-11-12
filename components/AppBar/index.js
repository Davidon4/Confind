import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ThemeContext from "../../config/ThemeContext";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const AppBar = ({ setModalVisible, modalVisible }) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer1}>
        <AntDesign name="earth" size={24} color={theme.list} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer2}>
        <AntDesign name="filter" size={24} color={theme.list} />
        <Text style={{ color: theme.list }}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;
