import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import HelloWorld from './helloWorld';
import history from './common/history';
import App from './ui';
import { graphUI } from './ui/graphs';

render(
    <Router history={history}>
        <Route exact path="/" component={App} />
        <Route exact path="/graph" component={graphUI} />
    </Router>, document.getElementById('app')
);
module.hot.accept();
