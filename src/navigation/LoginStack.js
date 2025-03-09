import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/Component";
import SignUp from "../screens/SignUp/Component";
import { screenNames } from "../utils/constants";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={screenNames.login}
    >
      <Stack.Screen name={screenNames.login} component={Login} />
      <Stack.Screen name={screenNames.signUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default LoginStack;
