import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


if (!window.Intl) {
    require.ensure([
      'intl',
      'intl/locale-data/jsonp/nb.js',
      'intl/locale-data/jsonp/en.js'
    ],
      (require) => {
        require('intl');
        require('intl/locale-data/jsonp/nb.js');
        require('intl/locale-data/jsonp/en.js');
        ReactDOM.render(<App />, document.getElementById('root'));
    });
  } else {
    ReactDOM.render(<App />, document.getElementById('root'));
}



