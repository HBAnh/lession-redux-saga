import React, { Component } from "react";
import style from "./style";
import { withStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

class SearchBox extends Component {
  render() {
      const { classes, handleChange } = this.props;
    return (
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField 
          autoComplete="off" 
          className={classes.searchBox}
          margin="normal"
          placeholder="Nhap tu khoa"
          onChange={handleChange}  />
          
        </Box>
      </div>
    );
  }
}

export default withStyles(style)(SearchBox);
