import React, { Component } from 'react';
import { Formik, Field } from 'formik';

import FormikTextField from './FormikTextField';
import FormikRadio from './FormikRadio';
import FormikSelect from './FormikSelect';
import FormikCheckbox from './FormikCheckbox';

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
  subscription: 'user',
  notify: false
};

const regionOptions = [
  { name: 'Africa', value: 'africa' },
  { name: 'Asia', value: 'asia' },
  { name: 'Europe', value: 'europe' },
  { name: 'Oceania', value: 'oceania' },
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

export default class FormikBasicSample extends Component {
  validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = 'You are legally required to have a name 🤨';
    }

    if (!values.email.includes('@')) {
      errors.email = 'Most emails have an @...';
    }

    if (values.token.length < 10) {
      errors.token =
        'That token is weak sauce. Throw a few more characters in there.';
    }

    if (!values.region) {
      errors.region = 'You do live on 🌎, right?';
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
              <h2>Basic Form Elements</h2>

              <FormControl
                success={touched.name && !errors.name ? true : false}
                error={touched.name && errors.name ? true : false}
              >
                <FormControlLabel htmlFor="name">Name:</FormControlLabel>
                <Field component={FormikTextField} type="text" name="name" />
                <FormHelperText>
                  {(touched.name && errors.name) || null}
                </FormHelperText>
              </FormControl>

              <FormControl
                success={touched.email && !errors.email ? true : false}
                error={touched.email && errors.email ? true : false}
              >
                <FormControlLabel htmlFor="email">Email:</FormControlLabel>
                <Field component={FormikTextField} type="email" name="email" />
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
                <Field component={FormikSelect} name="region">
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
                <Field
                  component={FormikCheckbox}
                  name="notify"
                  value="subscribe"
                >
                  Sign me up for notifications
                </Field>
              </FormControl>

              <FormControl>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </FormControl>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
        <pre>
          {`
          NOTES:

          - Formik's <Form> can't be used with Calcite React's <Form>. Instead, skip the 
            nicety of Formik's component and manually add the onSubmit to the CR <Form>.
            https://github.com/jaredpalmer/formik#form-
          `}
        </pre>
      </div>
    );
  }
}
