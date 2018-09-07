import React from 'react';

import FileUploader from 'calcite-react/FileUploader';

const FormikFileUploader = ({ field, form, disabled = false, ...props }) => {
  const { name } = field;
  const { touched, errors, isSubmitting, setTouched, setFieldValue } = form;

  const onChange = e => {
    setTouched({ [name]: true });
    setFieldValue(name, e.currentTarget.files);
  };

  return (
    <FileUploader
      {...props}
      onChange={onChange}
      success={touched[name] && !errors[name] ? true : false}
      error={touched[name] && errors[name] ? true : false}
      disabled={isSubmitting || disabled}
    />
  );
};

export default FormikFileUploader;
