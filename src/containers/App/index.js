import React, { Component } from "react";
import Taskboard from "../Taskboard/index";
import { withStyles } from "@mui/styles";
import style from "./style";
import { Provider } from "react-redux";
import configStore from "../../redux/configStore";

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Taskboard />
      </Provider>
    );
  }
}

export default withStyles(style)(App);
