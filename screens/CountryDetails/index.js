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
            <Text style={{ fontWeight: "300" }}>
              {country?.population.toLocaleString("en-US")}
            </Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Region: <Text style={{ fontWeight: "300" }}>{country?.region}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Capital:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.capital}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Motto: <Text style={{ fontWeight: "300" }}>{country?.capital}</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Official language:{" "}
            {Object.entries(country?.languages || {})?.map(([_, language]) => (
              <Text style={{ fontWeight: "300" }} key={language}>
                {language}
              </Text>
            ))}
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Ethnic group:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.region}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Religion:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.capital}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Government:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.capital}</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Independence:{" "}
            <Text style={{ fontWeight: "300" }}>
              {country?.independent ? "true" : "false"}
            </Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Area: <Text style={{ fontWeight: "300" }}>{country?.area}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Currency::{" "}
            {Object.entries(country?.currencies || {})?.map(([_, currency]) => (
              <Text style={{ fontWeight: "300" }} key={currency.name}>
                {currency.name}
              </Text>
            ))}
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            GDP: <Text style={{ fontWeight: "300" }}>{}</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Time Zone:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.timezones}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Date format:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.region}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Dailing code:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.callingCodes}</Text>
          </Text>
          <Text style={[styles.textStyle, { color: theme.list }]}>
            Driving side:{" "}
            <Text style={{ fontWeight: "300" }}>{country?.car?.side}</Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default CountryDetails;
