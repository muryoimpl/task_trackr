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
        <nav className="navbar navbar-default">
          <form className="navbar-form" role="search">
            <Input type="select">
              <option value="select">select project</option>
              <option value="create">create project</option>
            </Input>
          </form>
        </nav>
        <Tabs>
          <Tab eventKey={1} title="Current"></Tab>
          <Tab eventKey={2} title="Icebox"></Tab>
          <Tab eventKey={3} title="Done"></Tab>
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
