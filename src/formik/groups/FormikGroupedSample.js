import React, { Component } from 'react';
import { Formik, Field, FieldArray } from 'formik';

import FormikCheckboxHybrid from './FormikCheckboxHybrid';

import Button from 'calcite-react/Button';
import Form, {
  FormControl,
  FormControlLabel,
  FormHelperText
} from 'calcite-react/Form';

const user = {
  save: false,
  sdks: ['ios']
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

export default class FormikGroupedSample extends Component {
  validate(values) {
    let errors = {};
    if (!values.sdks.length) {
      errors.sdks = 'Required';
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
        <h1>Formik Grouped Sample</h1>

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
                component={FormikCheckboxHybrid}
                name="save"
                id={'save'}
                value="true"
              >
                Would you like to save?
              </Field>
              <hr />
              <FieldArray name="sdks">
                {arrayHelpers => (
                  <div>
                    {sdkOptions.map((sdk, i) => (
                      <Field
                        component={FormikCheckboxHybrid}
                        name="sdks"
                        value={sdk.value}
                        id={sdk.value}
                        key={sdk.value}
                        arrayHelpers={arrayHelpers}
                      >
                        {sdk.name}
                      </Field>
                    ))}
                  </div>
                )}
              </FieldArray>

              <FormControl>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </FormControl>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
