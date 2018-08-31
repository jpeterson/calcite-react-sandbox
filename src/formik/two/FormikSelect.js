import React from 'react';

import Select from 'calcite-react/Select';

const FormikSelect = ({
  field,
  form,
  label,
  children,
  disabled = false,
  ...props
}) => {
  const { name, onBlur } = field;
  const { touched, errors, isSubmitting, setFieldValue } = form;

  return (
    <Select
      {...props}
      onChange={e => setFieldValue(name, e)}
      onBlur={onBlur}
      selectedValue={field.value}
      type={props.type}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    >
      {children}
    </Select>
  );
};

export default FormikSelect;
