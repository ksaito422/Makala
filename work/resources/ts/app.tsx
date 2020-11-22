import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TotalContextProvider } from './contexts/TotalContext';
import { Top } from './containers/pages/Top';
import { LoginPage } from './containers/pages/LoginPage';
import { SignUpPage } from './containers/pages/SignUpPage';
import { HomePage } from './containers/pages/HomePage';
import { CardPage } from './containers/pages/CardPage';
import { MuiTheme } from './theme/MuiTheme';
import { MuiThemeProvider } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Router>
      <TotalContextProvider>
        <Switch>
          <MuiThemeProvider theme={MuiTheme}>
            <Route exact path='/' component={Top}></Route>
            <Route exact path='/login' component={LoginPage}></Route>
            <Route exact path='/sign-up' component={SignUpPage}></Route>
            <Route exact path='/home' component={HomePage}></Route>
            <Route exact path='/home/cards' component={CardPage}></Route>
          </MuiThemeProvider>
        </Switch>
      </TotalContextProvider>
    </Router>
  );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}