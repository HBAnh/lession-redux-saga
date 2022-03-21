import React from "react";
import Taskboard from "../Taskboard/index";
import { withStyles } from "@mui/styles";
import style from "./style";
import { Provider } from "react-redux";
import configStore from "../../redux/configStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading/index";
const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <GlobalLoading />
      <Taskboard />
    </Provider>
  );
};

export default withStyles(style)(App);
