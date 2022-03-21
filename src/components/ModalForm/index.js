import { withStyles } from "@mui/styles";
import React from "react";
import style from "./style";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import DangerousIcon from "@mui/icons-material/Dangerous";
import {  useDispatch, useSelector,  } from "react-redux";
import * as _modalActions from "../../actions/modal";

const ModalForm = (props) => {
  const {classes} = props;
  const open = useSelector((state) => state.modal.showM);
  const title = useSelector((state) => state.modal.title);
  const component = useSelector((state) => state.modal.component);
  

  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(_modalActions.hideModal());
  }
  return (
    <Modal open={open} onClose={hideModal} >
      <div className={classes.modal}>
        <div className={classes.modalhead}>
          <span className={classes.title}>{title}</span>
          <DangerousIcon
            fontSize="large"
            className={classes.iconClose}
            onClick={hideModal}
          />
        </div>
        <div>{component}</div>
      </div>
    </Modal>
  );
};

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
export default withStyles(style)(ModalForm);
