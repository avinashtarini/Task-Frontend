import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchDataWithToken from "../../services/useFetchDataWithToken";
import { apiMethods, apiUrlConsts } from "../../services/apiConsts";
import { showToast } from "../../redux/appSlice";
import { constants, screenNames } from "../../utils/constants";

const Container = (props) => {
  const navigation = useNavigation();
  const { userDetails } = useSelector((state) => state.app);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { fetchDataWithToken } = useFetchDataWithToken();

  useEffect(() => {
    if (isFocused) {
      setShowLoader(true);
      getAllTasks();
    }
  }, [isFocused]);

  const getAllTasks = async () => {
    try {
      const url = `${apiUrlConsts.getAllTasks}?userId=${userDetails?._id}`;
      const options = {
        method: apiMethods.get,
      };
      const response = await fetchDataWithToken(url, options);
      const result = await response?.json();
      if (response.status === 200) {
        setData(result?.data);
      } else {
      }

      setRefreshing(false);
      setShowLoader(false);
    } catch (error) {
      dispatch(showToast(constants.serverErr));
      setRefreshing(false);
      setShowLoader(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getAllTasks();
  };

  const onClickPlusIcon = () => navigation.navigate(screenNames.createEditTask);
  return {
    showLoader,
    data,
    refreshing,
    onRefresh,
    onClickPlusIcon,
  };
};

export default Container;
