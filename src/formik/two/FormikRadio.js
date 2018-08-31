import React from 'react';

import Radio from 'calcite-react/Radio';

const FormikRadio = ({ field, form, label, disabled = false, ...props }) => {
  const { name, value } = field;
  const { touched, errors, values, isSubmitting } = form;

  return (
    <Radio
      {...props}
      {...field}
      checked={values[name] === value}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    />
  );
};

export default FormikRadio;
