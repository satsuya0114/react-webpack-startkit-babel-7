import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import './index.less';

// import App from './App';

const supportsHistory = 'pushState' in window.history;
export default class Main extends Component {
  render() {
    return (
      <div className="app">
        <Router forceRefresh={!supportsHistory}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// if use BrowserRouter you have to add historyApiFallback: true at webpack config devserver
// see: https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback
// if use HashRouter you don't have to add any other setting.

