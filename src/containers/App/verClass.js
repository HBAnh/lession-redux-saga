import React, { Component } from "react";
import Taskboard from "../Taskboard/index";
import { withStyles } from "@mui/styles";
import style from "./style";
import { Provider } from "react-redux";
import configStore from "../../redux/configStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading/index";
import ModalForm from "../../components/ModalForm/index";
import { ADMIN_ROUTES } from '../../actions/constants/index';
import AdminLayoutRoute from '../../components/Layout/AdminLayoutRoute';
const store = configStore();

class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(route => {
      return (
        <AdminLayoutRoute key={route.path} route={route}/>
      )
    })
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
      <ToastContainer />
      <GlobalLoading />
      <ModalForm />
      <Taskboard />
        {/* <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter> */}
      </Provider>
    );
  }
}

export default withStyles(style)(App);
