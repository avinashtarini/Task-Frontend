import AsyncStorage from "@react-native-async-storage/async-storage";

async function storeData(key, value, onError) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    onError && onError(e);
  }
}

async function getData(key, onError) {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    onError && onError(e);
  }
}

async function removeData(key, onError) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    onError && onError(e);
  }
}

const asyncStorage = {
  storeData,
  getData,
  removeData,
};

export default asyncStorage;
