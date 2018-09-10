import React from 'react';

import FormikBasicSample from './basic/FormikBasicSample';
import FormikYupSample from './basic/FormikYupSample';

import Tabs, {
  TabNav,
  TabTitle,
  TabContents,
  TabSection
} from 'calcite-react/Tab';

class FormikSamples extends React.Component {
  state = {
    activeTabIndex: 0
  };

  render() {
    return (
      <Tabs
        activeTabIndex={this.state.activeTabIndex}
        onTabChange={activeTabIndex => this.setState({ activeTabIndex })}
      >
        <TabNav>
          <TabTitle>Basic</TabTitle>
          <TabTitle>Yup</TabTitle>
        </TabNav>
        <TabContents>
          <TabSection>
            <FormikBasicSample />
          </TabSection>
          <TabSection>
            <FormikYupSample />
          </TabSection>
        </TabContents>
      </Tabs>
    );
  }
}

export default FormikSamples;
