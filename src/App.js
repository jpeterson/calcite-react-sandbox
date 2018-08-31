import React, { Component } from 'react';

import FormikSamples from './formik';

import Tabs, {
  TabNav,
  TabTitle,
  TabContents,
  TabSection
} from 'calcite-react/Tab';

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
            <TabTitle>???</TabTitle>
          </TabNav>
          <TabContents>
            <TabSection>
              <FormikSamples />
            </TabSection>
            <TabSection>Coming Soon...</TabSection>
          </TabContents>
        </Tabs>
      </div>
    );
  }
}

export default App;
