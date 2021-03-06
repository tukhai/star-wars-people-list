import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';

import PeopleDetails from './people-details';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/people" component={App} />
        <Route path="/people-details" component={PeopleDetails} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
