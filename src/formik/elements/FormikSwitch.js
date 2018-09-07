import React from 'react';

import Switch from 'calcite-react/Switch';

const FormikSwitch = ({ field, form, value, disabled = false, ...props }) => {
  const { name, fieldValue } = field;
  const { touched, errors, isSubmitting, setFieldValue } = form;

  return (
    <Switch
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

export default FormikSwitch;
