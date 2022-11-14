import React, { useContext } from "react";
import { TextInput, View } from "react-native";
import ThemeContext from "../../config/ThemeContext";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

const Search = ({ value, onChangeText }) => {
  const theme = useContext(ThemeContext);

  return (
    <View
      style={[styles.inputContainer, { backgroundColor: theme.searchColor }]}
    >
      <View style={styles.iconContainer}>
        <Feather name="search" size={18} color={theme.placeholder} />
      </View>
      <TextInput
        style={{ flex: 0.95 }}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search Country"
        textAlign="center"
        placeholderTextColor={theme.placeholder}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Search;
