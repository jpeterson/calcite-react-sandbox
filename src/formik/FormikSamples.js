import React from 'react';

import FormikFirstSample from './one/FormikFirstSample';
import FormikSecondSample from './two/FormikSecondSample';
import FormikGroupedSample from './groups/FormikGroupedSample';

import Tabs, {
  TabNav,
  TabTitle,
  TabContents,
  TabSection
} from 'calcite-react/Tab';

class FormikSamples extends React.Component {
  state = {
    activeTabIndex: 2
  };

  render() {
    return (
      <Tabs
        activeTabIndex={this.state.activeTabIndex}
        onTabChange={activeTabIndex => this.setState({ activeTabIndex })}
      >
        <TabNav>
          <TabTitle>Approach One</TabTitle>
          <TabTitle>Approach Two</TabTitle>
          <TabTitle>Grouped</TabTitle>
        </TabNav>
        <TabContents>
          <TabSection>
            <FormikFirstSample />
          </TabSection>
          <TabSection>
            <FormikSecondSample />
          </TabSection>
          <TabSection>
            <FormikGroupedSample />
          </TabSection>
        </TabContents>
      </Tabs>
    );
  }
}

export default FormikSamples;
