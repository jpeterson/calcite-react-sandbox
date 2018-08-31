import React, { Component } from 'react';
import { Formik, Field } from 'formik';

import FormikTextField from './FormikTextField';
import FormikRadio from './FormikRadio';
import FormikSelect from './FormikSelect';

import Button from 'calcite-react/Button';
import { MenuItem } from 'calcite-react/Menu';
import Form, {
  FormControl,
  FormControlLabel,
  FormHelperText
} from 'calcite-react/Form';

const user = {
  name: '',
  email: '',
  token: '',
  region: '',
  subscription: ''
};

const regionOptions = [
  { name: 'Asia', value: 'asia' },
  { name: 'Europe', value: 'europe' },
  { name: 'North America', value: 'northamerica' },
  { name: 'South America', value: 'southamerica' }
];

const subscriptionOptions = [
  {
    name: 'User',
    value: 'user'
  },
  {
    name: 'Developer',
    value: 'dev'
  },
  {
    name: 'Administrator',
    value: 'admin'
  }
];

export default class FormikSecondSample extends Component {
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

    if (!values.region) {
      errors.region = 'Required';
    }

    if (!values.subscription) {
      errors.subscription = 'Required';
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
        <h1>Formik Second Sample</h1>
        <p>
          This approach puts all the Calcite React stuff into the Formik form
          itself. This leads to a more verbose form, but full control over
          Calcite React form components.
        </p>
        Pros:
        <ul>
          <li>
            Wrapper components won't be bound to enclosing Form components
          </li>
          <li>
            Allows for full control over all Calcite React form component props
            (FormControl's "horizontal" or "noValidation" props, for example)
          </li>
          <li>Inline with the Calcite React composition model</li>
        </ul>
        Cons:
        <ul>
          <li>
            To gain control over Calcite React Form component props, we'd need
            to make new props at the top level like "CalciteProps" or something,
            then bind those props to Calcite React props in our wrapper
            component
          </li>
          <li>Less abstraction, which means more code to write</li>
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

              <FormControl
                success={touched.name && !errors.name ? true : false}
                error={touched.name && errors.name ? true : false}
              >
                <FormControlLabel htmlFor="name">Name:</FormControlLabel>
                <Field
                  component={FormikTextField}
                  type="text"
                  name="name"
                  id="name"
                />
                <FormHelperText>
                  {(touched.name && errors.name) || null}
                </FormHelperText>
              </FormControl>

              <FormControl
                success={touched.email && !errors.email ? true : false}
                error={touched.email && errors.email ? true : false}
              >
                <FormControlLabel htmlFor="email">Email:</FormControlLabel>
                <Field
                  component={FormikTextField}
                  type="email"
                  name="email"
                  id="email"
                />
                <FormHelperText>
                  {(touched.email && errors.email) || null}
                </FormHelperText>
              </FormControl>

              <FormControl
                success={touched.token && !errors.token ? true : false}
                error={touched.token && errors.token ? true : false}
              >
                <FormControlLabel htmlFor="token">Token:</FormControlLabel>
                <Field
                  component={FormikTextField}
                  type="password"
                  name="token"
                  id="token"
                />
                <FormHelperText>
                  {(touched.token && errors.token) || null}
                </FormHelperText>
              </FormControl>

              <FormControl
                success={touched.region && !errors.region ? true : false}
                error={touched.region && errors.region ? true : false}
              >
                <FormControlLabel htmlFor="token">Region:</FormControlLabel>
                <Field
                  component={FormikSelect}
                  type="password"
                  name="region"
                  id="region"
                >
                  {regionOptions.map(region => (
                    <MenuItem key={region.value} value={region.value}>
                      {region.name}
                    </MenuItem>
                  ))}
                </Field>
                <FormHelperText>
                  {(touched.region && errors.region) || null}
                </FormHelperText>
              </FormControl>

              <FormControl
                success={
                  touched.subscription && !errors.subscription ? true : false
                }
                error={
                  touched.subscription && errors.subscription ? true : false
                }
              >
                <FormControlLabel htmlFor="subscription">
                  Subscription Type:
                </FormControlLabel>
                {subscriptionOptions.map(subscription => (
                  <Field
                    key={subscription.value}
                    component={FormikRadio}
                    name="subscription"
                    id="subscription"
                    value={subscription.value}
                  >
                    {subscription.name}
                  </Field>
                ))}
                <FormHelperText>
                  {(touched.subscription && errors.subscription) || null}
                </FormHelperText>
              </FormControl>

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
