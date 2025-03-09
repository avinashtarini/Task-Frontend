import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
const img = require("../assets/no_data.jpg");

const { height } = Dimensions.get("window");

function NoData(props) {
  return (
    <View style={styles.containerStyle}>
      <Image source={img} style={styles.imgStyle} />
    </View>
  );
}

export default NoData;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: height * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: { height: height * 0.4, width: "100%" },
});
