import React from 'react';

import Radio from 'calcite-react/Radio';

const FormikRadio = ({ field, form, value, disabled = false, ...props }) => {
  const { name } = field;
  const { touched, errors, values, isSubmitting, setFieldValue } = form;

  const handleChange = e => {
    setFieldValue(name, value);
  };

  return (
    <Radio
      {...props}
      {...field}
      onChange={handleChange}
      checked={values[name] === value}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    />
  );
};

export default FormikRadio;
