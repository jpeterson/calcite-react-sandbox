import React, { Component } from 'react';
import { Formik, Field, FieldArray } from 'formik';

import FormikTextField from '../elements/FormikTextField';
import FormikRadio from '../elements/FormikRadio';
import FormikSelect from '../elements/FormikSelect';
import FormikMultiSelect from '../elements/FormikMultiSelect';
import FormikCheckbox from '../elements/FormikCheckbox';
import FormikSwitch from '../elements/FormikSwitch';
import FormikSlider from '../elements/FormikSlider';
import FormikFileUploader from '../elements/FormikFileUploader';
import FormikDatePicker from '../elements/FormikDatePicker';
import FormikDateRangePicker from '../elements/FormikDateRangePicker';

import Button from 'calcite-react/Button';
import { MenuItem } from 'calcite-react/Menu';
import Form, {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Legend,
  Fieldset
} from 'calcite-react/Form';

const user = {
  name: '',
  email: '',
  token: '',
  volume: 0,
  region: '',
  dogs: [],
  avatar: null,
  birthday: null,
  booking: { startDate: null, endDate: null },
  subscription: 'user',
  sdks: [],
  mfa: false,
  notify: false
};

const sdkOptions = [
  {
    name: 'ArcGIS API for JS',
    value: 'jsapi'
  },
  {
    name: 'ArcGIS Runtime SDK for .NET',
    value: 'dotnet'
  },
  {
    name: 'ArcGIS Runtime SDK for iOS',
    value: 'ios'
  },
  {
    name: 'ArcGIS Runtime SDK for Android',
    value: 'android'
  }
];

const regionOptions = [
  { name: 'Africa', value: 'africa' },
  { name: 'Asia', value: 'asia' },
  { name: 'Europe', value: 'europe' },
  { name: 'Oceania', value: 'oceania' },
  { name: 'North America', value: 'northamerica' },
  { name: 'South America', value: 'southamerica' }
];

const dogOptions = [
  { name: 'Afghan Hound', value: 'afghanhound' },
  { name: 'Basenji', value: 'basenji' },
  { name: 'Bulldog', value: 'bulldog' },
  { name: 'Great Dane', value: 'greatdane' },
  { name: 'Yorkie', value: 'yorkie' },
  { name: 'Whippet', value: 'whippet' }
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

    if (values.volume > 75) {
      errors.volume = "You'll blow yer ears out, kid!";
    }

    if (!values.region) {
      errors.region = 'You do live on 🌎, right?';
    }

    if (!values.subscription) {
      errors.subscription = 'Required';
    }

    if (values.avatar && values.avatar.length) {
      if (values.avatar[0].size > 100000) {
        errors.avatar = 'Get that pic under 100kb, please.';
      }
    }

    if (!values.birthday) {
      errors.birthday = 'Tell me when you were born 👶🏼';
    }

    if (!values.booking.startDate || !values.booking.startDate) {
      errors.booking = 'Required 📆';
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

              {/* name - FormikTextField */}

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

              {/* email - FormikTextField */}

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

              {/* token - FormikTextField */}

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

              {/* region - FormikSelect */}

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

              {/* dogs - FormikMultiSelect */}

              <FormControl
                success={touched.dogs && !errors.dogs ? true : false}
                error={touched.dogs && errors.dogs ? true : false}
              >
                <FormControlLabel htmlFor="token">
                  Favorite Dogs:
                </FormControlLabel>
                <Field component={FormikMultiSelect} name="dogs" minimal>
                  {dogOptions.map(dog => (
                    <MenuItem key={dog.value} value={dog.value}>
                      {dog.name}
                    </MenuItem>
                  ))}
                </Field>
                <FormHelperText>
                  {(touched.dogs && errors.dogs) || null}
                </FormHelperText>
              </FormControl>

              {/* avatar - FormikFileUploader */}

              <FormControl
                success={touched.avatar && !errors.avatar ? true : false}
                error={touched.avatar && errors.avatar ? true : false}
              >
                <FormControlLabel>Upload an avatar:</FormControlLabel>
                <Field
                  component={FormikFileUploader}
                  name="avatar"
                  accept="image/*"
                />
                <FormHelperText>
                  {(touched.avatar && errors.avatar) || null}
                </FormHelperText>
              </FormControl>

              {/* birthday - FormikDatePicker */}

              <FormControl
                success={touched.birthday && !errors.birthday ? true : false}
                error={touched.birthday && errors.birthday ? true : false}
              >
                <FormControlLabel>Select your birthday:</FormControlLabel>
                <Field component={FormikDatePicker} name="birthday" />
                <FormHelperText>
                  {(touched.birthday && errors.birthday) || null}
                </FormHelperText>
              </FormControl>

              {/* booking - FormikDateRangePicker */}

              <FormControl
                success={touched.booking && !errors.booking ? true : false}
                error={touched.booking && errors.booking ? true : false}
              >
                <FormControlLabel>Booking Dates:</FormControlLabel>
                <Field
                  component={FormikDateRangePicker}
                  name="booking"
                  startDateId="booking_start"
                  endDateId="booking_end"
                />
                <FormHelperText>
                  {(touched.booking && errors.booking) || null}
                </FormHelperText>
              </FormControl>

              {/* volume - FormikTextSlider */}

              <FormControl
                success={touched.volume && !errors.volume ? true : false}
                error={touched.volume && errors.volume ? true : false}
                style={{ flex: '1 0 100px' }}
              >
                <FormControlLabel htmlFor="volume">
                  Preferred Volume:
                </FormControlLabel>
                <Field component={FormikSlider} name="volume" />
                <FormHelperText>
                  {values.volume} {(touched.volume && errors.volume) || null}
                </FormHelperText>
              </FormControl>

              {/* subscription - FormikRadio */}

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

              {/* sdks - FormikCheckbox */}

              <FormControl
                success={touched.sdks && !errors.sdks ? true : false}
                error={touched.sdks && errors.sdks ? true : false}
              >
                <Fieldset name="sdks">
                  <Legend>Choose your SDKs:</Legend>

                  <FieldArray name="sdks">
                    {arrayHelpers => (
                      <div>
                        {sdkOptions.map(sdk => (
                          <Field
                            component={FormikCheckbox}
                            name="sdks"
                            value={sdk.value}
                            key={sdk.value}
                            arrayHelpers={arrayHelpers}
                          >
                            {sdk.name}
                          </Field>
                        ))}
                      </div>
                    )}
                  </FieldArray>
                  <FormHelperText>
                    {(touched.sdks && errors.sdks) || null}
                  </FormHelperText>
                </Fieldset>
              </FormControl>

              {/* mfa - FormikSwitch */}

              <FormControl>
                <Field component={FormikSwitch} name="mfa" value="mfa">
                  Enable Multi-Factor Authentication
                </Field>
              </FormControl>

              {/* notify - FormikCheckbox */}

              <FormControl>
                <Field component={FormikCheckbox} name="notify" value="notify">
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
