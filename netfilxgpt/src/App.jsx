import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "./utils/constants";

function App() {
  return (
    <Provider store={appStore}>
      <Toaster {...toastConfig} />
      <Body />
    </Provider>
  );
}

export default App;

