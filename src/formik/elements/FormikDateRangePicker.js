import React, { Component } from 'react';

import { DateRangePicker } from 'calcite-react/DatePicker';

class FormikDateRangePicker extends Component {
  state = {
    focusedInput: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.form.setFieldValue(this.props.field.name, {
      startDate,
      endDate
    });
  };

  onFocusChange = focusedInput => {
    if (!focusedInput) {
      this.props.form.setTouched({ [this.props.field.name]: true });
    }

    this.setState({ focusedInput });
  };

  render() {
    const { field, form, disabled = false, children, ...props } = this.props;
    const { value } = field;
    const { isSubmitting } = form;

    return (
      <DateRangePicker
        {...props}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={this.state.focusedInput}
        startDate={value.startDate}
        endDate={value.endDate}
        disabled={isSubmitting || disabled}
      />
    );
  }
}

export default FormikDateRangePicker;
