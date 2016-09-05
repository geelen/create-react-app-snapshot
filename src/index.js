import React from 'react';
import {render} from 'react-snapshot'
import App from './App';
import './index.css';
import {Router, Route, browserHistory, IndexRoute, Link} from 'react-router'

const Index = () => (
  <div>
    <h1>This is the index!!</h1>
    <Link to="/login">Log in!</Link>
    <br/>
    <Link to="/about">About this site!</Link>
  </div>
)

const Login = () => (
  <div>
    <form action="/admin">
      <h1>This is a login form, not followed</h1>
      <button type="submit">Go to Admin</button>
    </form>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/about">About this site!</Link>
  </div>
)

const About = () => (
  <div>
    <h1>About this site</h1>
    <p>This should all be snapshotted.</p>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/login">Log in!</Link>
  </div>
)

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/login" component={Login}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
