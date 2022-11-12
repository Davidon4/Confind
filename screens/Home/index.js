import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Search from "../../components/Search";
import ThemeContext from "../../config/ThemeContext";
import List from "../List";
import { styles } from "./styles";
import axios from "axios";
import AppBar from "../../components/AppBar";
import CustomModal from "../../components/CustomModal";
import { initialFilter } from "../../data/initialFilter";

const Home = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState(initialFilter);
  const [intermediateFilter, setIntermediateFilter] = useState(initialFilter);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const allCountries = Object.values(data);

  const continentResult = allCountries
    .map((item) => item?.continents)
    .filter((value, index, self) => self.indexOf(value) === index);

  console.log("Continent Result=>", continentResult);

  const searchFilter = (text) => {
    if (text) {
      const newData = data.filter(function (item) {
        const itemData = item?.name?.common
          ? item?.name?.common.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(data);
      setSearch(text);
    }
  };

  return (
    <View style={[styles.textContainer, { backgroundColor: theme.background }]}>
      <Search onChangeText={(text) => searchFilter(text)} value={search} />
      <AppBar setModalVisible={setModalVisible} modalVisible={modalVisible} />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        filter={filter}
        setFilter={setFilter}
        intermediateFilter={intermediateFilter}
        setIntermediateFilter={setIntermediateFilter}
        continentResult={continentResult}
        allCountries={allCountries}
      />
      <List data={filteredData} allCountries={allCountries} filter={filter} />
    </View>
  );
};

export default Home;
