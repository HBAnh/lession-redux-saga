import React, { Component } from "react";
import Style from "./style";
import { withStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/styles";
import Taskboard from '../Taskboard/index';
import outTheme from '../../commons/Theme/index';
class App extends Component {
  render() {
    return (
      
      <ThemeProvider theme={outTheme} >
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(Style)(App);
