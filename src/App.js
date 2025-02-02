import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
