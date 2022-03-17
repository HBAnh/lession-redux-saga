import React, { Component } from "react";
import Taskboard from "../Taskboard/index";
import { withStyles } from "@mui/styles";
import style from "./style";
import { Provider } from "react-redux";
import configStore from "../../redux/configStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../GlobalLoading/index';
import ModalForm from '../../components/ModalForm/index';
const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <GlobalLoading />
        <ModalForm />
        <Taskboard />
      </Provider>
    );
  }
}

export default withStyles(style)(App);
