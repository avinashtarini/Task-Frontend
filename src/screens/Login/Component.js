import { View } from "react-native";
import Container from "./Container";
import Button from "../../components/Button";
import FloatingInput from "../../components/FloatingInput";
import { labels, placeHolders, textSizes } from "../../utils/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/Text";
import styles from "./Styles";

const Login = () => {
  const {
    email,
    password,
    disableLogin,
    showLoader,
    onChangeEmail,
    onChangePassword,
    onPressSignUp,
    onPressLogin,
  } = Container();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowGap15}>
        <Text title={"Task Manager"} size={textSizes.headlineMedium} />
        <Text title={"Welcome Back!!!"} size={textSizes.titleMedium} />
      </View>
      <View style={styles.rowGap15}>
        <FloatingInput
          label={labels.email}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={placeHolders.email}
        />
        <FloatingInput
          label={labels.password}
          value={password}
          placeholder={placeHolders.password}
          onChangeText={onChangePassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={onPressLogin}
          disabled={disableLogin}
          title={"Login"}
          mode={"contained"}
          style={styles.btnWidth}
          loading={showLoader}
        />
        <Text title={"or"} />
        <Button
          onPress={onPressSignUp}
          title={"Sign Up"}
          mode={"outlined"}
          style={styles.btnWidth}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
