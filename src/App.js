import React, { Component } from 'react';
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import { nbBundle, enBundle } from './bundle.json'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: nbBundle

    }
    addLocaleData(require('react-intl/locale-data/nb'));
  }

renderElements = () => (
  <IntlProvider key={this.state.locale.code} locale={this.state.locale.code} messages={this.state.locale.messages}>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>

      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
    </p>

    <button onClick={()=> this.setState({locale:nbBundle})}>no</button>
    <button onClick={()=> this.setState({locale:enBundle})}>en</button>

      <p><FormattedMessage id={"app.title"} /></p>
      <p><FormattedMessage id={"app.heading"} /></p>
      <p><FormattedMessage id={"app.language"} /></p>

      {
        Object.keys(this.state.locale).map((k)=> (<p>{k}  : 
                                                    {typeof this.state.locale[k]=== "string" ? this.state.locale[k]: 'noe noe'}
                                                    </p>))
      }
    </div>
  </IntlProvider >

);

  render() {
    console.log(nbBundle)
    console.log(enBundle)


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
        return this.renderElements()
      });
    } else {
      return this.renderElements()
    }

  }
}

export default App;
