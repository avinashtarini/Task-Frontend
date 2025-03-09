import { StyleSheet } from "react-native";
import globalStyles from "../../theme/styles";

const styles = StyleSheet.create({
  container: [
    globalStyles.screenContainer,
    { justifyContent: "space-between", paddingTop: 0 },
  ],
  detailsContainer: {
    rowGap: 20,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: { width: "48%", borderRadius: 8 },
});

export default styles;
