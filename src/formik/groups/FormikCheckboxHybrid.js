import React from 'react';

import Checkbox from 'calcite-react/Checkbox';

const FormikCheckbox = ({
  field,
  form,
  label,
  value,
  arrayHelpers = null,
  disabled = false,
  ...props
}) => {
  const { name } = field;
  const { touched, errors, values, isSubmitting, setFieldValue } = form;

  const handleChange = e => {
    if (arrayHelpers) {
      if (e.target.checked) {
        arrayHelpers.push(value);
      } else {
        const i = values[name].indexOf(value);
        arrayHelpers.remove(i);
      }
    } else {
      setFieldValue(name, e.target.checked);
    }
  };

  const isChecked = () => {
    if (arrayHelpers) {
      return values[name].includes(value);
    }
    return values[name] === true;
  };

  return (
    <Checkbox
      {...props}
      onChange={handleChange}
      checked={isChecked()}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    />
  );
};

export default FormikCheckbox;
