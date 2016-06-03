import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MainLayout from '../components/MainLayout';
import Home from '../components/Home';
import About from '../components/About';
import NotFound from '../components/NotFound';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="not-found" component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default App;
