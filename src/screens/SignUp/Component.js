import FloatingInput from "../../components/FloatingInput";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  constants,
  labels,
  minMaxValues,
  placeHolders,
  textSizes,
} from "../../utils/constants";
import { View } from "react-native";
import Text from "../../components/Text";
import Container from "./Container";
import styles from "./Styles";

const SignUp = () => {
  const {
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
  } = Container();

  return (
    <SafeAreaView style={styles.container}>
      <Text title={"Welcome to task manager"} size={textSizes.headlineMedium} />
      <FloatingInput
        label={labels.userName}
        value={userName.value}
        placeholder={placeHolders.userName}
        onChangeText={onChangeUserName}
        showHelperText={userName.err}
        helperMessage={constants.userNameAlert}
        error={userName.err}
        maxLength={minMaxValues.maxUserName}
      />

      <FloatingInput
        label={labels.email}
        value={email.value}
        placeholder={placeHolders.email}
        onChangeText={onChangeEmail}
        showHelperText={email.err}
        helperMessage={constants.emailAlert}
        error={email.err}
      />

      <FloatingInput
        label={labels.password}
        value={password.value}
        placeholder={placeHolders.password}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        showHelperText={password.err}
        helperMessage={constants.passwordAlert}
        error={password.err}
      />
      <View style={styles.btnContainer}>
        <Button
          mode={"contained"}
          title={"Sign Up"}
          disabled={disableSignUp}
          onPress={onPressSignUp}
          style={styles.btnWidth}
          loading={showLoader}
        />
        <Text title={"Already have an account ?"} style={styles.btnDiffText} />
        <Button
          title={"Login"}
          mode={"outlined"}
          onPress={onPressLogin}
          style={styles.btnWidth}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
