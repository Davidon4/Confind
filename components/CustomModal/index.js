import React from "react";
import { Text, View, Modal, Button, SafeAreaView } from "react-native";
import RadioButton from "../RadioButton";
import { initialFilter } from "../../data/initialFilter";

const CustomModal = ({
  modalVisible,
  setModalVisible,
  intermediateFilter,
  setIntermediateFilter,
  continentResult,
  allCountries,
  setFilter,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      style={{ flex: 1 }}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View style={{ marginBottom: 20, paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 26, alignSelf: "center" }}>Filter</Text>
        </View>

        <RadioButton
          handleChange={(continents) =>
            setIntermediateFilter({
              ...intermediateFilter,
              continents: continents,
            })
          }
          selected={intermediateFilter.continents}
          continentResult={continentResult}
        />
        <Button
          title="Show Result"
          onPress={() => {
            setModalVisible(!modalVisible);
            setFilter(intermediateFilter);
          }}
        />
        <Button
          title="Reset"
          onPress={() => {
            setModalVisible(!modalVisible);
            setFilter(initialFilter);
            setIntermediateFilter(initialFilter);
          }}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default CustomModal;
