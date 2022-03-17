import React, { Component } from "react";
import style from "./style";
import withStyles from "@mui/styles/withStyles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import * as modalActions from "../../actions/modal";
import { reduxForm, Field } from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";
import validate from "./validate";

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log(data);
  };

  required = (value) => {
    let error = "vui long dien vao";
    if (value !== null && typeof value !== "undefined" && value.trim() !== "") {
      error = null;
    }
    return error;
  };

  minLength5 = (value) => {
    let error = null;
    if (typeof value === "undefined" || value.length <= 5) {
      error = "vui long nhap tren 5 ky tu";
    }
    return error;
  };

  render() {
    const { classes, modalActionsCreate, handleSubmit, invalid, submitting } = this.props;
    const { hideModal } = modalActionsCreate;

    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container spacing={2} className={classes.content}>
          <Grid item md={12} className={classes.formGrid}>
            <Field
              id="title"
              label="title"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="decriptions"
              label="decriptions"
              className={classes.textField}
              margin="normal"
              name="decriptions"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Button
                variant="contained"
                style={{ float: "right" }}
                onClick={hideModal}
                className={classes.btn}
              >
                Cancel
              </Button>
              <Box mr={1}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  type="submit"
                  disabled={invalid || submitting}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  modalActionsCreate: PropTypes.shape({
    hideModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTitle: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsCreate: bindActionCreators(modalActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = "TASK_MANAGEMENT";

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(withStyles(style), withConnect, withReduxForm)(TaskForm);
