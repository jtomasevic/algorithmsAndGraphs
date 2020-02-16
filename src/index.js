import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import HelloWorld from './helloWorld';
import history from './common/history';
import App from './ui';

render(
    <Router history={history}>
        <Route exact path="/" component={App} />
    </Router>, document.getElementById('app')
);
module.hot.accept();
