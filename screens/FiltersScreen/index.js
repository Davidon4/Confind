import { Slider } from "@miblanchard/react-native-slider";
import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { Caption, Subheading, ThemeProvider } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import { Appbar, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import ThemeContext, {
  darkTheme,
  defaultTheme,
} from "../../config/ThemeContext";
import { change, cleanAll } from "../../feature/initialFilter";
import { styles } from "./styles";

const regionList = [
  {
    label: "",
    value: "",
  },
  {
    label: "Africa",
    value: "Africa",
  },
  {
    label: "America",
    value: "Americas",
  },
  {
    label: "Asia",
    value: "Asia",
  },
  {
    label: "Europe",
    value: "Europe",
  },
  {
    label: "Oceania",
    value: "Oceania",
  },
];

const languageList = [
  {
    label: "",
    value: "",
  },
  {
    label: "English",
    value: "English",
  },
  {
    label: "Spanish",
    value: "Spanish",
  },
];
const timezoneList = [
  {
    label: "",
    value: "",
  },
  {
    label: "GMT+1:00",
    value: "GMT+1:00",
  },
  {
    label: "GMT+2:00",
    value: "GMT+2:00",
  },
  {
    label: "GMT+3:00",
    value: "GMT+3:00",
  },
  {
    label: "GMT+4:00",
    value: "GMT+4:00",
  },
  {
    label: "GMT+5:00",
    value: "GMT+5:00",
  },
  {
    label: "GMT+6:00",
    value: "GMT+6:00",
  },
  {
    label: "GMT+7:00",
    value: "GMT+7:00",
  },
  {
    label: "GMT-7:00",
    value: "GMT-6:00",
  },
];

function FiltersScreen() {
  const { isThemeDark } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [capital, setCapital] = useState("");

  const [region, setRegion] = useState();
  const [showRegionDropDown, setShowRegionDropDown] = useState(false);

  const [timezones, setTimezones] = useState();
  const [showTimezonesDropDown, setShowTimezonesDropDown] = useState(false);

  const [language, setLanguage] = useState();
  const [showLanguageDropDown, setShowLanguageDropDown] = useState(false);

  const [population, setPopulation] = useState(0);

  const _handleClean = () => {
    setCapital("");
    setRegion(null);
    setTimezones(null);
    setLanguage(null);
    setPopulation(0);
    dispatch(cleanAll());
  };

  const _handleApply = () =>
    dispatch(
      change({
        capital,
        region,
        language,
        population,
        timezones,
      })
    );

  return (
    <View style={isThemeDark ? styles.darkContainer : styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Filters" />
        <Text
          onPress={_handleClean}
          style={isThemeDark ? styles.darkText : styles.text}
        >
          Reset
        </Text>
        <Text
          onPress={_handleApply}
          style={isThemeDark ? styles.darkText : styles.text}
        >
          Show Results
        </Text>
      </Appbar.Header>
      <TextInput
        placeholder="Search for a capital..."
        value={capital}
        mode="flat"
        onChangeText={(value) => setCapital(value)}
        selectionColor="#4F4F4F"
        style={isThemeDark ? styles.darkTextInput : styles.textInput}
        left={<TextInput.Icon name="magnify" color="#4F4F4F" />}
      />
      <SafeAreaView style={styles.selectDropdownContainer}>
        <ThemeProvider
          theme={
            isThemeDark
              ? darkTheme
              : {
                  ...defaultTheme,
                  colors: {
                    ...DefaultTheme.colors,
                    primary: "white",
                    text: "black",
                    background: "white",
                  },
                }
          }
        >
          <DropDown
            key={`region-${region}`}
            label="Continent"
            mode="outlined"
            visible={showRegionDropDown}
            showDropDown={() => setShowRegionDropDown(true)}
            onDismiss={() => setShowRegionDropDown(false)}
            value={region}
            setValue={setRegion}
            list={regionList}
            dropDownItemTextStyle={styles.dropDownItemTextStyle}
            dropDownItemSelectedTextStyle={styles.dropDownItemSelectedTextStyle}
          />
          <View style={styles.spacerStyle} />
          <DropDown
            key={`language-${language}`}
            label="Language"
            mode="outlined"
            visible={showLanguageDropDown}
            showDropDown={() => setShowLanguageDropDown(true)}
            onDismiss={() => setShowLanguageDropDown(false)}
            value={language}
            setValue={setLanguage}
            list={languageList}
            dropDownItemTextStyle={styles.dropDownItemTextStyle}
            dropDownItemSelectedTextStyle={styles.dropDownItemSelectedTextStyle}
          />
          <View style={styles.spacerStyle} />
          <DropDown
            key={`timezone-${timezones}`}
            label="Time zone"
            mode="outlined"
            visible={showTimezonesDropDown}
            showDropDown={() => setShowTimezonesDropDown(true)}
            onDismiss={() => setShowTimezonesDropDown(false)}
            value={timezones}
            setValue={setTimezones}
            list={timezoneList}
            dropDownItemTextStyle={styles.dropDownItemTextStyle}
            dropDownItemSelectedTextStyle={styles.dropDownItemSelectedTextStyle}
          />
        </ThemeProvider>
        <View style={styles.spacerStyle} />
        <Subheading>Filter by population</Subheading>
        <Caption>{`Above than: ${population.toLocaleString(
          "en-US"
        )} M`}</Caption>
        <Slider
          value={population}
          minimumValue={0}
          maximumValue={300000000}
          onValueChange={(value) => setPopulation(value)}
          maximumTrackTintColor="#4F4F4F"
          minimumTrackTintColor="#828282"
          step={5_000_000}
        />
      </SafeAreaView>
    </View>
  );
}

export default FiltersScreen;
