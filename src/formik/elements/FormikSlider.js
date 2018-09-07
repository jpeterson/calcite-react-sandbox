import React from 'react';

import Slider from 'calcite-react/Slider';

const FormikSlider = ({ field, form, disabled = false, ...props }) => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  return (
    <Slider
      {...props}
      {...field}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    />
  );
};

export default FormikSlider;
