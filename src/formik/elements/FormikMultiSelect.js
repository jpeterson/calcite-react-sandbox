import React from 'react';

import MultiSelect from 'calcite-react/MultiSelect';

const FormikMultiSelect = ({
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
    <MultiSelect
      {...props}
      {...field}
      onChange={e => setFieldValue(name, e)}
      selectedValues={field.value}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    >
      {children}
    </MultiSelect>
  );
};

export default FormikMultiSelect;
