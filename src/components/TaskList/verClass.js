import withStyles from "@mui/styles/withStyles";
import React, { Component } from "react";
import style from "./style";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TaskItem from "../TaskItem/index";
import PropTypes from "prop-types";

class TaskList extends Component {
  render() {
    const { classes, tasks, status, onClickEdit,onClickDelete} = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box>
          <div className={classes.status}>
            <h1>{status.label}</h1>
          </div>
        </Box>
        <div>
          {tasks.map((task) => {
            return (
              <TaskItem
                onClickEdit={() => onClickEdit(task)}
                onClickDelete={()  => onClickDelete(task.id)}
                key={task.id}
                task={task}
                status={status}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};
export default withStyles(style)(TaskList);
