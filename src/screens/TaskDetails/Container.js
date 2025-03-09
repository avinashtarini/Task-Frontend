import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useFetchDataWithToken from "../../services/useFetchDataWithToken";
import { apiMethods, apiUrlConsts } from "../../services/apiConsts";
import { showToast } from "../../redux/appSlice";
import { constants, screenNames } from "../../utils/constants";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const Container = (props) => {
  const { id } = props?.route?.params;
  const [task, setTask] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { fetchDataWithToken } = useFetchDataWithToken();
  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) {
      setShowLoader(true);
      callApi();
    }
  }, [isFocused]);

  const callApi = async () => {
    try {
      const url = apiUrlConsts.getTask + id;
      const options = {
        method: apiMethods.get,
      };
      const response = await fetchDataWithToken(url, options);
      const result = await response?.json();
      if (response.status === 200) {
        setTask(result?.task);
      } else {
        dispatch(showToast(result?.message));
      }
      setShowLoader(false);
    } catch (error) {
      dispatch(showToast(constants.serverErr));
      setShowLoader(false);
    }
  };

  const onPressDelete = () => {
    Alert.alert("", "Are you sure want to delete this task?", [
      {
        text: "No",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: proceedToDelete,
      },
    ]);
  };

  const proceedToDelete = async () => {
    try {
      const url = apiUrlConsts.deleteTask + id;
      const options = {
        method: apiMethods.delete,
      };
      const response = await fetchDataWithToken(url, options);
      const result = await response?.json();
      if (response.status === 200) {
        navigation.goBack();
      } else {
        dispatch(showToast(result?.message));
      }
    } catch (error) {
      dispatch(showToast(constants.serverErr));
    }
  };

  const onPressEdit = () => {
    navigation.navigate(screenNames.createEditTask, {
      data: task,
      isEditing: true,
    });
  };

  return {
    showLoader,
    task,
    onPressDelete,
    onPressEdit,
  };
};

export default Container;
