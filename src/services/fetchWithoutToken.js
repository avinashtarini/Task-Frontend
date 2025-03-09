import { baseUrl } from "./apiConsts";

const fetchWithoutToken = async (url, options = {}) => {
  try {
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
    };
    const totalUrl = baseUrl + url;
    const response = await fetch(totalUrl, options);
    return response;
  } catch (error) {
    throw new Error("Something went wrong: " + error?.message);
  }
};

export default fetchWithoutToken;
