import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { apiMethods, apiUrlConsts, baseUrl } from "../../services/apiConsts";
import fetchWithoutToken from "../../services/fetchWithoutToken";
import useDispatchUserDetails from "../../utils/useDispatchUserDetails";
import { isValidEmail, removeAllSpaces } from "../../utils/helpers";
import { showToast } from "../../redux/appSlice";
import { useDispatch } from "react-redux";
import { constants, screenNames } from "../../utils/constants";

const Container = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const { updateUserData } = useDispatchUserDetails();
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const disableLogin = useMemo(() => {
    if (isValidEmail(email) && password.length > 1) {
      return false;
    }
    return true;
  }, [email, password]);

  const onPressSignUp = () => {
    navigation.navigate(screenNames.signUp);
  };

  const onPressLogin = async () => {
    setShowLoader(true);
    try {
      const data = {
        password: password,
        email: email,
      };
      const options = {
        method: apiMethods.post,
        body: JSON.stringify(data),
      };
      const url = apiUrlConsts.login;
      const response = await fetchWithoutToken(url, options);
      const responseData = await response?.json();
      if (response.status === 200) {
        await updateUserData(responseData);
      } else {
        dispatch(showToast(responseData?.message));
      }
      setShowLoader(false);
    } catch (error) {
      console.log(error, "console.log");
      dispatch(showToast(constants.serverErr));
      setShowLoader(false);
    }
  };

  const onChangeEmail = (text) => {
    setEmail(removeAllSpaces(text).toLowerCase());
  };

  const onChangePassword = (text) => {
    setPassword(removeAllSpaces(text));
  };

  return {
    email,
    password,
    disableLogin,
    showLoader,
    onChangeEmail,
    onChangePassword,
    onPressSignUp,
    onPressLogin,
  };
};

export default Container;
