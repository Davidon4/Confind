import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.45,
  },
  list: {},
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
  paginationLine: {
    height: 4,
    width: 20,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 5,
  },
  activeLine: {
    backgroundColor: "black",
    width: 30,
  },
});
