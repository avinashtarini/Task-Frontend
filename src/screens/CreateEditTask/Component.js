import React from "react";
import { SafeAreaView, View } from "react-native";
import FloatingInput from "../../components/FloatingInput";
import Button from "../../components/Button";
import { labels, minMaxValues, placeHolders } from "../../utils/constants";
import Container from "./Container";
import styles from "./Styles";

function CreateEditTask(props) {
  const {
    task,
    disableSubmit,
    showLoader,
    onChangeDescription,
    onChangeName,
    onPressSubmit,
  } = Container(props);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <FloatingInput
          label={labels.name}
          value={task.name}
          placeholder={placeHolders.name}
          onChangeText={onChangeName}
          maxLength={minMaxValues.maxTaskName}
          showHelperText={true}
          helperType={"info"}
          helperMessage={`Minimum ${minMaxValues.minTaskName} characters - ${task?.name?.length || 0}/ ${minMaxValues.maxTaskName}`}
        />
        <FloatingInput
          label={labels.description}
          value={task.description}
          placeholder={placeHolders.description}
          multiline
          style={styles.description}
          onChangeText={onChangeDescription}
          maxLength={minMaxValues.maxTaskDescription}
          showHelperText={true}
          helperType={"info"}
          helperMessage={`Minimum ${minMaxValues.minTaskDescription} characters - ${task?.description?.length || 0}/ ${minMaxValues.maxTaskDescription}`}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title={"Cancel"} mode={"outlined"} style={styles.btn} />
        <Button
          mode={"contained"}
          title={"Submit"}
          disabled={disableSubmit}
          style={styles.btn}
          onPress={onPressSubmit}
          loading={showLoader}
        />
      </View>
    </SafeAreaView>
  );
}

export default CreateEditTask;
