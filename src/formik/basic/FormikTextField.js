import React from 'react';

import TextField from 'calcite-react/TextField';

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
    <TextField
      {...props}
      {...field}
      type={props.type}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    />
  );
};

export default FormikTextField;