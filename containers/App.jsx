import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

//material-ui
//import * as mui from 'material-ui';
import * as mui, { ToolBar, ToolbarGroup, DropDownMenu, FontIcon } from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();
const Colors = mui.Styles.Colors;

export default class App extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const menuItems = [
      { payload: '1', text: 'Sample' }
    ];

    return (
      <div>
        <ToolBar>
          <ToolbarGroup key={0} float="left">
            <FontIcon className="muidocs-icon-action-home" />
            <DropDownMenu menuItems={menuItems} />
            <FontIcon className="muidocs-icon-box-add" />
          </ToolbarGroup>

          <ToolbarGroup key={1} float="right">

          </ToolbarGroup>
        </AppBar>
      </div>
    );
  }
}

App.childContextTypes = {muiTheme: React.PropTypes.object};

export default connect(state => {
  return {
  }
})(App);
