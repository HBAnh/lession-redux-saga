import React from "react";
import style from "./style";
import { withStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const SearchBox = (props) => {
  const {classes, handleChange} = props
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
          onChange={handleChange}
        />
      </Box>
    </div>
  );
};

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};

export default withStyles(style)(SearchBox);
