import React, { Component } from 'react';
import { Formik, Field } from 'formik';

import FormikTextField from './FormikTextField';

import Button from 'calcite-react/Button';
import Form, { FormControl } from 'calcite-react/Form';

const user = {
  name: '',
  email: '',
  token: ''
};

export default class FormikFirstSample extends Component {
  validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.email.includes('@')) {
      errors.email = 'Must have an @';
    }

    if (values.token.length < 10) {
      errors.token = 'Must be at least 10 characters';
    }

    return errors;
  }

  onSubmit(values, actions) {
    console.log(values, actions);
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Formik First Sample</h1>
        <p>
          This approach puts all the Calcite React stuff into the wrapped up
          component, allowing the top level form to be much more concise.
        </p>
        Pros:
        <ul>
          <li>Less logical code in the form component</li>
          <li>Cleaner forms</li>
        </ul>
        Cons:
        <ul>
          <li>
            To gain control over Calcite React Form component props, we'd need
            to make new props at the top level like "CalciteProps" or something,
            then bind those props to Calcite React props in our wrapper
            component
          </li>
          <li>
            Feels like a departure from the Calcite React composition model
          </li>
        </ul>
        <Formik
          initialValues={user}
          validate={this.validate}
          onSubmit={this.onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <Form onSubmit={handleSubmit}>
              <h2>Connect your account</h2>
              <Field
                component={FormikTextField}
                type="text"
                name="name"
                label="Name:"
              />
              <Field
                component={FormikTextField}
                type="email"
                name="email"
                label="Email:"
              />
              <Field
                component={FormikTextField}
                type="password"
                name="token"
                label="Token:"
              />
              <FormControl>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </FormControl>
            </Form>
          )}
        </Formik>
        <pre>
          {`
          NOTES:

          - Formik's <Form> can't be used with Calcite React's <Form>. Instead, skip the 
            nicety of Formik's component and manually add the onSubmit to the CR <Form>.
            https://github.com/jaredpalmer/formik#form-

          - Something is keeping TextField from working properly... it appears the inner input
            is not getting an id or name. Looks like it is getting those attributes in the 
            Calcite React storybook though... why? Setting id={name} and name={name} seems
            to work... but wouldn't work if there were 2 forms with the same named element, right?
          `}
        </pre>
      </div>
    );
  }
}
