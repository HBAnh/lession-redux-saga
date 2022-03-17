import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import style from "./style";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import * as modalActions from "../../actions/modal";
import DangerousIcon from '@mui/icons-material/Dangerous';
class ModalForm extends Component {
  
  render() {
    const { classes, open, title, component, modalActionsCreate } = this.props;
    const { hideModal } = modalActionsCreate;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.modalhead}>
            <span className={classes.title}>{title}</span>
            <DangerousIcon fontSize="large" className={classes.iconClose} onClick={hideModal}/>
          </div>
            <div>{component}</div>
        </div>
      </Modal>
    );
  }
}

ModalForm.propTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object,
  component: PropTypes.object,
  title: PropTypes.string,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTitle: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    open: state.modal.showM,
    title: state.modal.title,
    component: state.modal.component,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsCreate: bindActionCreators(modalActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(style), withConnect)(ModalForm);
