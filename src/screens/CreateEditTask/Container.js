import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchDataWithToken from "../../services/useFetchDataWithToken";
import { constants, minMaxValues } from "../../utils/constants";
import { apiMethods, apiUrlConsts } from "../../services/apiConsts";
import { showToast } from "../../redux/appSlice";
import { convertMultipleSpacesToSingleSpace } from "../../utils/helpers";

const Container = (props) => {
  const { data, isEditing = false } = props?.route?.params || {};
  const { userDetails } = useSelector((state) => state.app);

  const [task, setTask] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { fetchDataWithToken } = useFetchDataWithToken();

  const disableSubmit = useMemo(() => {
    if (
      task?.name?.length > minMaxValues.minTaskName &&
      task?.description?.length > minMaxValues.minTaskDescription
    )
      return false;
    return true;
  }, [task]);

  useEffect(() => {
    if (isEditing) {
      setTask(data);
    }
  }, []);

  const onPressSubmit = async () => {
    setShowLoader(true);
    try {
      const data = { ...task, createdBy: userDetails?._id };

      const url = isEditing
        ? apiUrlConsts.editTask + data._id
        : apiUrlConsts.taskCreation;
      const options = {
        body: JSON.stringify(data),
      };
      if (isEditing) {
        options.method = apiMethods.put;
      } else {
        options.method = apiMethods.post;
      }
      delete data._id;

      const response = await fetchDataWithToken(url, options);

      const result = await response?.json();

      if (response.status === 200 || response.status === 201) {
        navigation.goBack();
      }
      dispatch(showToast(result?.message));
      setShowLoader(false);
    } catch (error) {
      setShowLoader(false);
      dispatch(showToast(constants.serverErr));
    }
  };

  const onChangeName = (text) => {
    const trimmedText = convertMultipleSpacesToSingleSpace(text);
    setTask((prev) => ({ ...prev, name: trimmedText }));
  };

  const onChangeDescription = (text) => {
    const trimmedText = convertMultipleSpacesToSingleSpace(text);
    setTask((prev) => ({ ...prev, description: trimmedText }));
  };

  return {
    task,
    disableSubmit,
    showLoader,
    onChangeDescription,
    onChangeName,
    onPressSubmit,
  };
};

export default Container;
