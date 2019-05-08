import React, { Component } from "react";
import AppNavigator from "./src/navigator/AppNavigator";
import store from "./src/store";
import { Provider } from "react-redux";
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
