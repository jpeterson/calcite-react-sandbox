import React from 'react';

import TextField from 'calcite-react/TextField';
import {
  FormControl,
  FormControlLabel,
  FormHelperText
} from 'calcite-react/Form';

const FormikTextField = ({
  field,
  form,
  label,
  disabled = false,
  ...props
}) => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  return (
    <FormControl
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
    >
      <FormControlLabel htmlFor={name}>{label}</FormControlLabel>
      <TextField
        {...props}
        {...field}
        type={props.type}
        id={name}
        name={name}
        disabled={isSubmitting || disabled}
      />
      <FormHelperText>{(touched[name] && errors[name]) || null}</FormHelperText>
    </FormControl>
  );
};

export default FormikTextField;
