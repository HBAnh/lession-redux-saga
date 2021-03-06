import React, { Component } from "react";
import style from "./style";
import { STATUSES } from "../../actions/constants/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Grid from "@mui/material/Grid";
import TaskList from "../../components/TaskList";
import TaskForm from "../TaskForm/index";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/task";
import * as modalActions from "../../actions/modal";
import SearchBox from "../../components/SearchBox";

class Taskboard extends Component {
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }
  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((s) => {
          const taskFilter = listTask.filter((task) => task.status === s.value);
          return (
            <TaskList
              key={s.value}
              tasks={taskFilter}
              status={s}
              onClickEdit={this.handleEditTask}
              onClickDelete={this.handleDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  }
  handleDeleteTask = (id) => {
    const {taskActionCreators} = this.props;
    const { deleteTask } = taskActionCreators;
    // eslint-disable-next-line no-restricted-globals
    if(confirm('Bạn có chắc muốn xoá?')){
      deleteTask(id);
    }
  }
  handleEditTask = (task) => {
    const { taskActionCreators,modalActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    const taskEditing = task;
    setTaskEditing(taskEditing);
    const { showModal } =
      modalActionCreators;
  
    showModal("EDIT TASK", <TaskForm />);
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    const { modalActionCreators, taskActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(null);
    const { showModal } =
      modalActionCreators;
    showModal("ADD NEW TASK",<TaskForm />);
   
  };

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  };

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  renderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          style={{
            marginRight: 10,
          }}
          className={classes.button}
          onClick={this.loadData}
        >
          <AutorenewIcon className={classes.addIcon} />
          Load Data
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <Add className={classes.addIcon} />
          Add new task
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
    deleteTask: PropTypes.func,
    setTaskEditing: PropTypes.func,
  }),
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTitle: PropTypes.func,
  }),
  listTask: PropTypes.array,
  showM: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
    showM: state.modal.showM,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(style)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);

