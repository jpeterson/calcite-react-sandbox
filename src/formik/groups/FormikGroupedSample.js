import React, { Component } from 'react';
import { Formik, Field, FieldArray } from 'formik';

import FormikCheckboxHybrid from './FormikCheckboxHybrid';

import Button from 'calcite-react/Button';
import Form, {
  FormControl,
  Legend,
  Fieldset,
  FormControlLabel,
  FormHelperText
} from 'calcite-react/Form';

const user = {
  sdks: []
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
      errors.sdks = "C'mon, you must have at least one favorite!";
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
              <h2>"Grouped" Form Elements</h2>

              <FormControl
                success={touched.sdks && !errors.sdks ? true : false}
                error={touched.sdks && errors.sdks ? true : false}
              >
                <Fieldset name="sdks">
                  <Legend>Choose your SDKs:</Legend>
                </Fieldset>

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
                <FormHelperText>
                  {(touched.sdks && errors.sdks) || null}
                </FormHelperText>
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
      </div>
    );
  }
}
