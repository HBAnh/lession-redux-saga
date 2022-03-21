import React, { useEffect } from "react";
import style from "./style";
import { STATUSES } from "../../actions/constants/index";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Grid from "@mui/material/Grid";
import TaskList from "../../components/TaskList";
import TaskForm from "../TaskForm/index";
import * as modalActions from "../../actions/modal";
import SearchBox from "../../components/SearchBox";
import * as _action from "../../actions/task";

const Taskboard = (props) => {
  const { classes } = props;

  const dispatch = useDispatch();

  const listTask = useSelector((state) => state.task.listTask);
  const initialValues = useSelector((state) => state.task.taskEditing);
  const open = useSelector((state) => state.modal.showM);

  useEffect(() => {
    dispatch(_action.fetchListTask());
  }, [dispatch]);

  const handleDeleteTask = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Bạn có chắc muốn xoá?")) {
      dispatch(_action.deleteTask(id));
    }
  };
  const handleEditTask = (task) => {
    const taskEditing = task;
    dispatch(_action.setTaskEditing(taskEditing));
    dispatch(modalActions.showModal("EDIT TASK", <TaskForm />));
  };

  const openForm = () => {
    dispatch(_action.setTaskEditing(null));
    dispatch(modalActions.showModal("ADD NEW TASK", <TaskForm />));
  };

  const loadData = () => {
    dispatch(_action.fetchListTask());
  };

  const handleFilter = (e) => {
    const { value } = e.target;
    dispatch(_action.filterTask(value));
  };

  const renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={handleFilter} />;
    return xhtml;
  };

  const renderBoard = () => {
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
              onClickEdit={handleEditTask}
              onClickDelete={handleDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  return (
    <div className={classes.taskboard}>
      <Button
        variant="contained"
        color="primary"
        style={{
          marginRight: 10,
        }}
        className={classes.button}
        onClick={loadData}
      >
        <AutorenewIcon className={classes.addIcon} />
        Load Data
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={openForm}
      >
        <Add className={classes.addIcon} />
        Add new task
      </Button>
      {renderSearchBox()}
      {renderBoard()}

      {open ? <TaskForm initialValues={initialValues} open={open} /> : null}
    </div>
  );
};

Taskboard.propTypes = {
  classes: PropTypes.object,
  fetchListTask: PropTypes.func,
  filterTask: PropTypes.func,
  deleteTask: PropTypes.func,
  setTaskEditing: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
  listTask: PropTypes.array,
  showM: PropTypes.bool,
};

export default withStyles(style)(Taskboard);
