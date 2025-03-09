import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation/Navigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Toast from "./src/components/Toast";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar />
      <Provider store={store}>
        <Navigation />
        <Toast />
      </Provider>
    </PaperProvider>
  );
}
