import withStyles from "@mui/styles/withStyles";
import React, { Component } from "react";
import style from "./style";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit';
import Grid from "@mui/material/Grid";
import Fab from '@mui/material/Fab';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { id, title } = task;
    return (
      <div key={id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
            <Fab size="small" color="secondary" aria-label="edit">
                <EditIcon></EditIcon>
            </Fab>
        </CardActions>
      </div>
    );
  }
}

export default withStyles(style)(TaskItem);
