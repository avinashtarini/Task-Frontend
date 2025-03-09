import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import LoginStack from "./LoginStack";
import { useEffect } from "react";
import asyncStorage from "../utils/asyncStorage";
import { tokenSecret } from "../utils/constants";

const Navigation = () => {
  const { userDetails } = useSelector((state) => state.app);
  useEffect(() => {
    if (userDetails === null) {
      removeAllAsyncStoredData();
    }
  }, []);

  const removeAllAsyncStoredData = async () => {
    await asyncStorage.removeData(tokenSecret);
  };

  return (
    <NavigationContainer>
      {userDetails?._id ? <HomeStack /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default Navigation;
