import withStyles from "@mui/styles/withStyles";
import React, { Component } from "react";
import style from "./style";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon'
import Card from "@mui/material/Card";

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
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
              {status.label}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Fab size="small" color="primary" aria-label="edit" className={classes.fab}>
                <Icon fontSize="small">edit_icon</Icon>
            </Fab>
            <Fab size="small" color="secondary" aria-label="delete" className={classes.fab}>
                <Icon fontSize="small">delete_icon</Icon>
            </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(style)(TaskItem);
