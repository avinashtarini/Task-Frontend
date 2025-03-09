import { StyleSheet } from "react-native";
import globalStyles from "../../theme/styles";

const styles = StyleSheet.create({
  container: [
    globalStyles.screenContainer,
    { justifyContent: "space-between" },
  ],
  inputContainer: {
    rowGap: 20,
  },
  description: {
    minHeight: 200,
    maxHeight: 200,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: { width: "48%", borderRadius: 8 },
});

export default styles;
