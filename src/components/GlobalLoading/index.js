import React from "react";
import style from "./style";
import { withStyles } from "@mui/styles";
import loadingIcon from "../../assets/images/loadingIcon.gif";
import PropTypes from "prop-types";
import {  useSelector } from "react-redux";


const GlobalLoading = props => {
  let xhtml = null;
  const {classes} = props;

  const checkLoading = useSelector((state) => state.ui.showLoading);
  if (checkLoading) {
          xhtml = (
            <div className={classes.globalLoading}>
              <img src={loadingIcon} alt="loading" className={classes.icon} />
            </div>
          );
        }

  return xhtml;
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

export default withStyles(style)(GlobalLoading);

