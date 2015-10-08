import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import injectTapEventPlugin from 'react-tap-event-plugin';

//bootstrap
import { Navbar, NavBrand, Tabs, Tab } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavBrand>React-Bootstrap</NavBrand>
        </Navbar>
        <Tabs>
          <Tab eventKey={1} title="tab1">tab1</Tab>
        </Tabs>
      </div>
    );
  }
}


export default connect(state => {
  return {

  }
})(App);
