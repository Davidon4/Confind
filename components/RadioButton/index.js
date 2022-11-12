import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

import { View, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = (props) => {
  return (
    <View>
      <View
        style={{
          flexWrap: "wrap",
          height: 300,
          paddingHorizontal: 10,
          width: "100%",
          alignContent: "space-between",
        }}
      >
        {props.continentResult.map((res) => {
          return (
            <View key={res} style={styles.container}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => props.handleChange(res)}
                activeOpacity={0.8}
              >
                <View style={styles.radioCircle}>
                  {props.selected === res && <View style={styles.selectedRb} />}
                </View>
                <Text style={styles.radioText}>{res}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default RadioButton;
