import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import injectTapEventPlugin from 'react-tap-event-plugin';

//bootstrap
import { Button, Col, Glyphicon, Input, Nav, Navbar, NavBrand, NavItem, Tabs, Tab } from 'react-bootstrap';

export class App extends React.Component {
  handlePlusClick(e) {
    e.preventDefault();
    //フォームに置き換え
    //Enter で追加する
  }

  render() {
    return (
      <main>
        <Navbar>
          <Nav>
            <NavItem>
              <Input type="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </Input>
            </NavItem>
          </Nav>
        </Navbar>
        <Tabs>
          <Tab eventKey={1} title="tab1">tab1</Tab>
        </Tabs>
      </main>
    );
  }
}

App.propTypes = {};

export default connect(state => {
  return {
  }
})(App);
