import React, { useContext } from "react";
import { Pressable, Image, Text, View } from "react-native";
import ThemeContext from "../../config/ThemeContext";
import { styles } from "./styles";

const FavoriteItem = ({ name, flags, onPress, capital }) => {
  const theme = useContext(ThemeContext);
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ uri: flags.png }} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.list }]}>{name.common}</Text>
        <Text style={[styles.price, { color: theme.placeholder }]}>
          {capital}
        </Text>
      </View>
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
