import React, { Component } from 'react';

import DatePicker from 'calcite-react/DatePicker';

class FormikDatePicker extends Component {
  state = {
    focused: false
  };

  onDateChange = date => {
    console.log(date);

    this.props.form.setFieldValue(this.props.field.name, date);
  };

  onFocusChange = ({ focused }) => {
    if (!focused) {
      this.props.form.setTouched({ [this.props.field.name]: true });
    }

    this.setState({ focused });
  };

  render() {
    const { field, form, disabled = false, children, ...props } = this.props;
    const { value } = field;
    const { isSubmitting } = form;

    return (
      <DatePicker
        {...props}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        focused={this.state.focused}
        date={value}
        disabled={isSubmitting || disabled}
      />
    );
  }
}

export default FormikDatePicker;
