import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './containers/pages/HomePage';

const App: React.FC = () => {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
        </Switch>
      </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}