import React from "react";
import style from "./style";
import withStyles from "@mui/styles/withStyles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import * as _modalActions from "../../actions/modal";
import * as _taskActions from "../../actions/task";
import { reduxForm, Field } from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";
import renderSelectField from "../../components/FormHelper/SelectForm";
import validate from "./validate";
import { MenuItem } from "@mui/material";

const TaskForm = (props) => {
  const { classes, invalid, submitting, handleSubmit } = props;

  const taskEditing = useSelector((state) => state.task.taskEditing);

  const dispatch = useDispatch();

  const handleSubmitForm = (data) => {
    const { title, decriptions, status } = data;
    if (taskEditing && taskEditing.id) {
      dispatch(_taskActions.updateTask(title, decriptions, status));
    } else {
      dispatch(_taskActions.addTask(title, decriptions));
    }
  };

  const onHideModal = () => {
    dispatch(_modalActions.hideModal());
  };

  const renderStatusSelection = () => {
    let xhtml = null;
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
  };
  const renderSelectStatus = renderStatusSelection();
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
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
          {renderSelectStatus}
        </Grid>
        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Button
              style={{ float: "right" }}
              onClick={onHideModal}
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
};

TaskForm.propTypes = {
  classes: PropTypes.object,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  updateTask: PropTypes.func,
  addTask: PropTypes.func,
  hideModal: PropTypes.func,
};

const FORM_NAME = "TASK_MANAGEMENT";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      decriptions: state.task.taskEditing
        ? state.task.taskEditing.decriptions
        : null,
      status: state.task.taskEditing ? state.task.taskEditing.status : null,
    },
  };
};
const withConnect = connect(mapStateToProps);
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(withStyles(style), withConnect, withReduxForm)(TaskForm);
