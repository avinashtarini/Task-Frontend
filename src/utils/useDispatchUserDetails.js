import { useDispatch } from "react-redux";
import asyncStorage from "./asyncStorage";
import { tokenSecret } from "./constants";
import { showToast, updateUserDetails } from "../redux/appSlice";

const useDispatchUserDetails = () => {
  const dispatch = useDispatch();

  async function updateUserData(data) {
    await asyncStorage.storeData(tokenSecret, data?.user?.token, (err) => {
      console.log(err, "storage error");
    });
    delete data.user.token;
    dispatch(updateUserDetails(data.user));
    dispatch(showToast(data.message));
  }
  return {
    updateUserData,
  };
};

export default useDispatchUserDetails;
