import React from 'react';
import {render} from 'react-snapshot'
import App from './App';
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Index, Login, About, Admin, FourOhFour} from './pages'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/login" component={Login}/>
      <Route path="/about" component={About}/>
      <Route path="/admin" component={Admin}/>
      <Route path="*" component={FourOhFour}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
