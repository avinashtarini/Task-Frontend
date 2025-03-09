import { View } from "react-native";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/Text";
import Container from "./Container";
import styles from "./Styles";
import { textSizes } from "../../utils/constants";
import NoData from "../../components/NoData";
import Spinner from "../../components/Spinner";

const TaskDetails = (props) => {
  const { showLoader, task, onPressDelete, onPressEdit } = Container(props);
  const renderNoData = () => {
    return <NoData />;
  };
  if (showLoader) {
    return <Spinner />;
  }
  return (
    <SafeAreaView style={styles.container}>
      {task?._id ? (
        <>
          <View style={styles.detailsContainer}>
            <Text title={task.name} size={textSizes.headlineSmall} />
            <Text title={task.description} size={textSizes.bodyLarge} />
          </View>
          <View style={styles.btnContainer}>
            <Button
              style={styles.btn}
              title={"Delete"}
              mode={"outlined"}
              onPress={onPressDelete}
            />
            <Button
              style={styles.btn}
              title={"Edit"}
              mode={"contained"}
              onPress={onPressEdit}
            />
          </View>
        </>
      ) : (
        renderNoData()
      )}
    </SafeAreaView>
  );
};

export default TaskDetails;
