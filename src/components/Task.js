import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";
import { screenNames, textSizes } from "../utils/constants";
import { colors } from "../theme/themes";

function Task(props) {
  const { task = {} } = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(screenNames.taskDetails, {
      id: task._id,
    });
  };

  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
      <Text title={task.name} size={textSizes.titleMedium} />
      <Text title={task.description} size={textSizes.bodySmall} />
    </TouchableOpacity>
  );
}

export default Task;

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    rowGap: 5,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 5,
  },
});
