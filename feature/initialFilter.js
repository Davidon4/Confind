import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";
import ThemeContext from "../config/ThemeContext";

const initialFilter = ({ setFilteredValue }) => {
  const theme = useContext(ThemeContext);
  const [currentValue, setCurrentValue] = useState(null);
  const [borderColor, setBorderColor] = useState("#ffffff22");

  useEffect(() => {
    styles.inputIOS = { ...styles.inputIOS, borderColor };
  }, [borderColor]);

  return (
    <TouchableOpacity style={styles.iconContainer2}>
      <AntDesign name="filter" size={24} color={theme.list} />
      <RNPickerSelect
        placeholder={{
          label: "Filter",
          value: null,
        }}
        items={[
          {
            label: "All",
            value: "all",
          },
          {
            label: "Europe",
            value: "europe",
          },
          {
            label: "Africa",
            value: "africa",
          },
          {
            label: "Asia",
            value: "asia",
          },
          {
            label: "Americas",
            value: "americas",
          },
          {
            label: "Oceania",
            value: "oceania",
          },
        ]}
        value={currentValue}
        onValueChange={(value) => setCurrentValue(value)}
        onDonePress={() => setFilteredValue(currentValue)}
        onOpen={() => setBorderColor("#ffffff22")}
        onClose={() => setBorderColor("#ffffff88")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    color: "#aaaaaa",
  },
  iconContainer2: {
    height: 40,
    flexDirection: "row",
    padding: 8,
    marginRight: 15,
  },
});

export default initialFilter;
