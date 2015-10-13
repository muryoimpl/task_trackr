require('../testdom')('<html><body></body></html>');

import React from 'react/addons';

import jsdomReact from '../jsdomReact';
import {App} from '../../containers/App';

const { TestUtils } = React.addons;

function setup() {
  let props = {};

  let renderer = TestUtils.createRenderer();
  renderer.render(<App {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('App.jsx', () => {
  jsdomReact();

  it('includes ', () => {
    const { output } = setup();
    //ここに検証対象を、、、、
  });
});
