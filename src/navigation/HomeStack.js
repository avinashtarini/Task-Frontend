import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Component";
import CreateEditTask from "../screens/CreateEditTask/Component";
import TaskDetails from "../screens/TaskDetails/Component";
import { screenNames } from "../utils/constants";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={screenNames.home}
    >
      <Stack.Screen name={screenNames.home} component={Home} options={{}} />
      <Stack.Screen
        name={screenNames.createEditTask}
        component={CreateEditTask}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={screenNames.taskDetails}
        component={TaskDetails}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
