import React, { Component } from 'react';

import FormikSamples from './formik';
import IconDemo from './icons/IconDemo';

import Tabs, {
  TabNav,
  TabTitle,
  TabContents,
  TabSection
} from 'calcite-react/Tabs';

import logo from './esri.png';

import './App.css';

class App extends Component {
  state = {
    activeTabIndex: 0
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calcite React Sandbox</h1>
        </header>
        <Tabs
          activeTabIndex={this.state.activeTabIndex}
          onTabChange={activeTabIndex => this.setState({ activeTabIndex })}
        >
          <TabNav>
            <TabTitle>Formik</TabTitle>
            <TabTitle>Icons</TabTitle>
          </TabNav>
          <TabContents>
            <TabSection>
              <span role="img" aria-label="warning">
                ⚠️
              </span>{' '}
              This demo is obsolete! Calcite React now supports Formik
              integration out of the box.{' '}
              <a
                href="https://calcite-react.netlify.com/text-field#with-formik"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here's an example
              </a>{' '}
              <span role="img" aria-label="warning">
                ⚠️
              </span>
              <FormikSamples />
            </TabSection>
            <TabSection>
              <IconDemo />
            </TabSection>
          </TabContents>
        </Tabs>
      </div>
    );
  }
}

export default App;
