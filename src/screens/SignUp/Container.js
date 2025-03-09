import { useMemo, useState } from "react";
import useDispatchUserDetails from "../../utils/useDispatchUserDetails";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {
  convertMultipleSpacesToSingleSpace,
  isValidEmail,
  isValidPassword,
  removeAllSpaces,
} from "../../utils/helpers";
import { constants, minMaxValues, screenNames } from "../../utils/constants";
import { apiMethods, apiUrlConsts } from "../../services/apiConsts";
import fetchWithoutToken from "../../services/fetchWithoutToken";
import { showToast } from "../../redux/appSlice";

const Container = (props) => {
  const [userName, setUserName] = useState({
    value: "",
    err: false,
  });
  const [password, setPassword] = useState({
    value: "",
    err: false,
  });
  const [email, setEmail] = useState({
    value: "",
    err: false,
  });
  const [showLoader, setShowLoader] = useState(false);

  const { updateUserData } = useDispatchUserDetails();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const disableSignUp = useMemo(() => {
    if (
      isValidEmail(email.value) &&
      isValidPassword(password.value) &&
      userName.value.length >= minMaxValues.minUserName
    ) {
      return false;
    }
    return true;
  }, [userName, email, password]);

  const onPressSignUp = async () => {
    setShowLoader(true);
    try {
      const data = {
        username: userName.value,
        password: password.value,
        email: email.value,
      };
      console.log(data, "rewda");
      const urls = apiUrlConsts.signUp;
      const options = {
        method: apiMethods.post,
        body: JSON.stringify(data),
      };
      const response = await fetchWithoutToken(urls, options);
      console.log(response);
      const result = await response.json();
      if (response.status === 201) {
        await updateUserData(result);
      } else {
        dispatch(showToast(result?.message));
      }
      setShowLoader(false);
    } catch (error) {
      console.log(error);
      dispatch(showToast(constants.serverErr));
      setShowLoader(false);
    }
  };

  const onPressLogin = () => {
    navigation.navigate(screenNames.login);
  };

  const onChangeEmail = (text) => {
    const trimmedText = removeAllSpaces(text)?.toLowerCase();
    const isValid = isValidEmail(trimmedText);
    setEmail({
      value: trimmedText,
      err: !isValid,
    });
  };

  const onChangePassword = (text) => {
    const trimmedText = removeAllSpaces(text);
    const isValid = isValidPassword(trimmedText);
    setPassword({
      value: trimmedText,
      err: !isValid,
    });
  };

  const onChangeUserName = (text) => {
    const trimmedText = convertMultipleSpacesToSingleSpace(text);
    const isInvalid = trimmedText.length < minMaxValues.minUserName;
    setUserName({
      value: trimmedText,
      err: isInvalid,
    });
  };

  return {
    email,
    userName,
    password,
    disableSignUp,
    showLoader,
    onChangeEmail,
    onChangePassword,
    onChangeUserName,
    onPressLogin,
    onPressSignUp,
  };
};

export default Container;
