import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ThemeContext from "../../config/ThemeContext";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import InitialFilter from "../../feature/initialFilter";

const AppBar = ({ setFilteredValue }) => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer1}>
        <AntDesign name="earth" size={24} color={theme.list} />
      </TouchableOpacity>
      <InitialFilter setFilteredValue={setFilteredValue} />
    </View>
  );
};

export default AppBar;
