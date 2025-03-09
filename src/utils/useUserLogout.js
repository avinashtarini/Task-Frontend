import { useDispatch } from "react-redux";
import { resetUserData, showToast } from "../redux/appSlice";
import asyncStorage from "./asyncStorage";
import { tokenSecret } from "./constants";

function useUserLogout() {
  const dispatch = useDispatch();
  async function logoutUser() {
    await asyncStorage.removeData(tokenSecret);
    dispatch(resetUserData());
    dispatch(showToast("Logged out"));
  }

  return {
    logoutUser,
  };
}

export default useUserLogout;
