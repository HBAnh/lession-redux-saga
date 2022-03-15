import React, { Component } from "react";
import style from "./style";
import STATUSES from "../../constants/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import { bindActionCreators } from "redux";
import * as taskActions from "./../../actions/task";


class Taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { taskActions } = this.props;
    const { fetchListTaskRequest } = taskActions;

    fetchListTaskRequest();
  }

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((s) => {
          const taskFilter = listTask.filter((task) => task.status === s.value);
          return <TaskList key={s.value} tasks={taskFilter} status={s} />;
        })}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose}></TaskForm>;
    return xhtml;
  }
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActions: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
  }),
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask

  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(style)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
