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
import * as taskActions from "../../actions/task";
import { reduxForm, Field } from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";
import renderSelectField from "../../components/FormHelper/SelectForm";
import validate from "./validate";
import { MenuItem } from "@mui/material";

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    const { taskActionsCreate, taskEditing } = this.props;
    const { addTask, updateTask } = taskActionsCreate;
    const { title, decriptions, status } = data;
    if (taskEditing && taskEditing.id) {
      updateTask(title, decriptions, status);
    } else {
      addTask(title, decriptions);
    }
  };

  renderStatusSelection() {
    let xhtml = null;
    const { classes, taskEditing } = this.props;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id="status"
          label="Trạng thái"
          className={classes.selectStatus}
          name="status"
          component={renderSelectField}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In Progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      );
    }
    return xhtml;
  }

  render() {
    const { classes, modalActionsCreate, handleSubmit, invalid, submitting } =
      this.props;
    const { hideModal } = modalActionsCreate;
    const renderSelect = this.renderStatusSelection();
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container spacing={2} className={classes.content}>
          <Grid item md={12} className={classes.formGrid}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="decriptions"
              label="Mô tả"
              className={classes.textField}
              margin="normal"
              name="decriptions"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            {renderSelect}
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
  renderSelect: PropTypes.object,
  classes: PropTypes.object,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  initialValues: PropTypes.object,
  taskActionsCreate: PropTypes.shape({
    updateTask: PropTypes.func,
    addTask: PropTypes.func,
  }),
  modalActionsCreate: PropTypes.shape({
    hideModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTitle: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      decriptions: state.task.taskEditing
        ? state.task.taskEditing.decriptions
        : null,
      status: state.task.taskEditing ? state.task.taskEditing.status : null,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsCreate: bindActionCreators(modalActions, dispatch),
    taskActionsCreate: bindActionCreators(taskActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = "TASK_MANAGEMENT";

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(withStyles(style), withConnect, withReduxForm)(TaskForm);
