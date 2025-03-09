import { StyleSheet } from "react-native";
import globalStyles from "../../theme/styles";

const styles = StyleSheet.create({
  container: [globalStyles.screenContainer, { justifyContent: "center" }],
  rowGap15: {
    rowGap: 15,
  },
  btnContainer: { alignItems: "center", rowGap: 10 },
  btnWidth: { width: "100%" },
});

export default styles;
