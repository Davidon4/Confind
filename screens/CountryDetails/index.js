import React, { useContext } from "react";
import ThemeContext from "../../config/ThemeContext";
import { styles } from "./styles";
import { ScrollView, Text, Image, View } from "react-native";

const CountryDetails = ({ route }) => {
  const theme = useContext(ThemeContext);
  const { country } = route?.params || {};

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: `${country?.flags?.png}` }}
          />
        </View>

        <View style={styles.content}>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Population:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.population}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Region: <Text style={{ fontWeight: "300" }}>{country?.region}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Capital:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.capital}</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Official language:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.[languages]}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Ethnic group:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.region}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Religion: {country?.capital}
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Government: {country?.capital}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default CountryDetails;
