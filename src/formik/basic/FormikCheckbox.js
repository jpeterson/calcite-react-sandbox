import React from 'react';

import Checkbox from 'calcite-react/Checkbox';

const FormikCheckbox = ({ field, form, value, disabled = false, ...props }) => {
  const { name, fieldValue } = field;
  const { touched, errors, isSubmitting, setFieldValue } = form;

  return (
    <Checkbox
      {...props}
      {...field}
      value={value}
      onChange={e => setFieldValue(name, e.target.checked)}
      checked={fieldValue}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    />
  );
};

export default FormikCheckbox;
