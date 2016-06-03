import React from 'react';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={Routes} />
    );
  }
}

export default App;
