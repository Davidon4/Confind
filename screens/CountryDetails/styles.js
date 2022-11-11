import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  imageContainer: {
    marginTop: "5%",
    paddingHorizontal: 17,
  },
  image: {
    width: "100%",
    height: height / 3.5,
    borderRadius: 10,
  },
  content: {
    marginTop: 20,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1C1917",
    paddingHorizontal: 17,
  },
});
