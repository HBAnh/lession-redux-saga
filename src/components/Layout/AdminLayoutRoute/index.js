import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import styles from "./styles";
import { Route } from "react-router-dom";

class AdminLayoutRoute extends Component {
  render() {
    const { route } = this.props;
    // lấy thằng name từ trong route ra những thằng còn lại gọi là ...remainProps
    const { name, ...remainProps } = route;
    return <Route {...remainProps} />;
  }
}

export default withStyles(styles)(AdminLayoutRoute);
