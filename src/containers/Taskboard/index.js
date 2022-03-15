import React, { Component } from "react";
import style from "./style";
import STATUSES from "../../constants/index";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import TaskList from "../../components/TaskList";

const listTask = [
  {
    id: 1,
    title: "Đọc tài liệu",
    decriptions: "Tài liệu về Material UI",
    status: 0,
  },
  {
    id: 2,
    title: "Chơi đá banh",
    decriptions: "Chơi với bạn bè ",
    status: 2,
  },
  {
    id: 3,
    title: "Đi tập Gyms",
    decriptions: "Nâng cao sức khoẻ",
    status: 1,
  },
];

class Taskboard extends Component {
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((s) => {
          const taskFilter = listTask.filter((task) => task.status === s.value);
          return <TaskList key={s.value} tasks={taskFilter} status={s}/>
        })}
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon />
          Thêm mới công việc
        </Button>
        {this.renderBoard()}

      </div>
    );
  }
}

export default withStyles(style)(Taskboard);
