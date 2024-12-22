import { Provider } from "react-redux";
import Body from "./components.js/Body";
import appStore from "./Utiles.js/AppStore";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
     
        <Body />
      </Provider>
    </div>
  );
}

export default App;