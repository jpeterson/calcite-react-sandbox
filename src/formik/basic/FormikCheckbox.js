import React from 'react';

import Checkbox from 'calcite-react/Checkbox';

const FormikCheckbox = ({ field, form, disabled = false, ...props }) => {
  const { name, value } = field;
  const { touched, errors, values, isSubmitting, setFieldValue } = form;

  return (
    <Checkbox
      {...props}
      {...field}
      value={value.toString()}
      onChange={e => setFieldValue(name, e.target.checked)}
      checked={values[name] === true}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    />
  );
};

export default FormikCheckbox;
