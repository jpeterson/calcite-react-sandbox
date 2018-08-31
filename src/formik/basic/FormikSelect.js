import React from 'react';

import Select from 'calcite-react/Select';

const FormikSelect = ({
  field,
  form,
  type,
  children,
  disabled = false,
  ...props
}) => {
  const { name } = field;
  const { touched, errors, isSubmitting, setFieldValue } = form;

  return (
    <Select
      {...props}
      {...field}
      onChange={e => setFieldValue(name, e)}
      selectedValue={field.value}
      type={type}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    >
      {children}
    </Select>
  );
};

export default FormikSelect;
