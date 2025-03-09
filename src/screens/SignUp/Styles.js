import { StyleSheet } from "react-native";
import globalStyles from "../../theme/styles";

const styles = StyleSheet.create({
  container: [globalStyles.screenContainer, { justifyContent: "center" }],
  btnContainer: { alignItems: "center", rowGap: 15 },
  btnWidth: { width: "100%" },
  btnDiffText: { paddingVertical: 5 },
});

export default styles;
