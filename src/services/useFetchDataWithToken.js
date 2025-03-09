import asyncStorage from "../utils/asyncStorage";
import { tokenSecret } from "../utils/constants";
import useUserLogout from "../utils/useUserLogout";
import { baseUrl } from "./apiConsts";

const useFetchDataWithToken = () => {
  const { logoutUser } = useUserLogout();

  const fetchDataWithToken = async (url, options = {}) => {
    const token = await asyncStorage.getData(tokenSecret);

    if (token) {
      options.headers = {
        ...options.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      try {
        const combinedUrl = baseUrl + url;
        const response = await fetch(combinedUrl, options);

        if (response.status === 401) {
          logoutUser();
        }
        return response;
      } catch (error) {
        throw new Error("Something went wrong: " + error.message);
      }
    } else {
      logoutUser();
    }
  };

  return {
    fetchDataWithToken,
  };
};
export default useFetchDataWithToken;
