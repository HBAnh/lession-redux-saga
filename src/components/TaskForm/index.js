import React, { Component } from 'react'
import style from './style';
import withStyles from "@mui/styles/withStyles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';


class TaskForm extends Component {
  render() {
    const {open, classes, onClose} = this.props;

    return (
        <Dialog 
            open={open} 
            onClose={onClose}
            >
          <DialogTitle>Thêm mới công việc</DialogTitle>
          <DialogContent>
            
            <TextField id="standard-basic"                          label="Name"   
            variant="standard" 
            margin="normal"
            className={classes.textField}
            />
            <br/>
            <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="standard"
            margin="normal"
            className={classes.textField}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose}>Ok</Button>
          </DialogActions>
        </Dialog>
    )
  }
}
export default withStyles(style)(TaskForm);