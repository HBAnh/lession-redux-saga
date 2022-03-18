import React from "react";
import { Select, FormControl, InputLabel, FormHelperText } from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import styles from "./styles";
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

renderFromHelper.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.bool,
};

const renderSelectField = ({
  classes,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error} className={classes.formControl}>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: "color-native-simple",
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

renderSelectField.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
  children: PropTypes.array,
};

export default withStyles(styles)(renderSelectField);
