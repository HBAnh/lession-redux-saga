import withStyles from "@mui/styles/withStyles";
import React, { Component } from "react";
import style from "./style";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";

class TaskItem extends Component {
  render() {
    const { classes, task, status, onClickEdit, onClickDelete } = this.props;
    const { id, title, decriptions } = task;
    return (
      <Card key={id} className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h3">{title}</Typography>

              <Typography component="h3">{decriptions}</Typography>
            </Grid>
            <Grid item md={4}>
              <span className={classes.span}>{status.label}</span>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            size="small"
            color="primary"
            aria-label="edit"
            className={classes.fab}
            onClick={onClickEdit}
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            size="small"
            color="secondary"
            aria-label="delete"
            className={classes.fab}
            onClick={() => onClickDelete(id)}
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default withStyles(style)(TaskItem);
