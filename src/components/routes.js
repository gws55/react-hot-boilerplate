import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout/Layout';
import Home from './Pages/Home';
import FruitView from './Pages/Fruit/FruitView';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="fruit-view" component={FruitView} />
    <Route path="about" component={About} />
    <Route path="not-found" component={NotFound} />
    <Route path="*" component={NotFound} />
  </Route>
);
