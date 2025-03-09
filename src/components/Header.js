import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "./Button";
import useUserLogout from "../utils/useUserLogout";
import { useSelector } from "react-redux";
import Text from "./Text";
import { colors } from "../theme/themes";
import { textSizes } from "../utils/constants";

function Header(props) {
  const { logoutUser } = useUserLogout();
  const { userDetails } = useSelector((state) => state.app);

  const onPressLogout = () => {
    logoutUser();
  };
  return (
    <View style={styles.containerStyle}>
      <View style={styles.container2}>
        <Text
          size={textSizes.titleMedium}
          title={`Task Manager (${userDetails?.username})`}
        />

        <Button
          compact={true}
          title={"Logout"}
          mode={"outlined"}
          onPress={onPressLogout}
        />
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    paddingBottom: 10,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
