import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';

import Home from './Home';
import About from './About';

export default props => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);
