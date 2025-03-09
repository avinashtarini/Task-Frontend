import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Spinner = () => (
  <View style={styles.spinnerContainer}>
    <ActivityIndicator animating={true} size={"large"} />
  </View>
);

export default Spinner;

const styles = StyleSheet.create({
  spinnerContainer: { flex: 1, justifyContent: "center" },
});
