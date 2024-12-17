// App.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import SearchScreen from "./src/compoonents/SearchScreen";

const App = () => {
  return (
    <Provider store={store}>
      <SearchScreen />
    </Provider>
  );
};

export default App;
