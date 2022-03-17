import React, { Component } from "react";
import style from "./style";
import { STATUSES } from "../../constants/index";
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
import * as taskActions from "./../../actions/task";
import * as modalActions from "../../actions/modal";
import SearchBox from "../../components/SearchBox";

class Taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { taskActions } = this.props;
    const { fetchListTask } = taskActions;
    fetchListTask();
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

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    const {  modalActionCreators } = this.props;
    const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
    showModal();
    changeModalTitle("ADD NEW TASK");
    changeModalContent(<TaskForm />);
  };

  loadData = () => {
    const { taskActions } = this.props;
    const { fetchListTask } = taskActions;
    fetchListTask();
  };

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActions } = this.props;
    const { filterTask } = taskActions;
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
  taskActions: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
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
    taskActions: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(style)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
