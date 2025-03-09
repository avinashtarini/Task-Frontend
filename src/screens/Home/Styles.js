import { StyleSheet } from "react-native";
import globalStyles from "../../theme/styles";

const styles = StyleSheet.create({
  container: [globalStyles.screenContainer, { rowGap: 10 }],
  listContainer: { flex: 1 },
  fabContainer: {
    position: "absolute",
    bottom: 15,
    right: 20,
  },
  listContentContainer: { rowGap: 10 },
});

export default styles;
