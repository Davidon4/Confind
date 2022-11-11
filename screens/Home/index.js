import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import Search from "../../components/Search";
import ThemeContext from "../../config/ThemeContext";
import List from "../List";
import { styles } from "./styles";
import axios from "axios";

const Home = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
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
      <List data={filteredData} />
    </View>
  );
};

export default Home;
