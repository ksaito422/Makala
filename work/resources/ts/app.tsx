import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute';
import { GuestRoute } from './routes/GuestRoute';
import { TotalContextProvider } from './contexts/TotalContext';
import { TopPage } from './containers/pages/TopPage';
import { LoginPage } from './containers/pages/LoginPage';
import { SignUpPage } from './containers/pages/SignUpPage';
import { ConfirmPage } from './containers/pages/ConfirmPage';
import { HomePage } from './containers/pages/HomePage';
import { CardPage } from './containers/pages/CardPage';
import { MuiTheme } from './theme/MuiTheme';
import { MuiThemeProvider } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Router>
      <TotalContextProvider>
        <MuiThemeProvider theme={MuiTheme}>
          <Switch>
            <Route exact path='/' component={TopPage} />
            <GuestRoute exact path='/login' component={LoginPage} />
            <GuestRoute exact path='/sign-up' component={SignUpPage} />
            <GuestRoute exact path='/sign-up/confirm' component={ConfirmPage} />
            <PrivateRoute exact path='/home' component={HomePage} />
            <PrivateRoute exact path='/home/cards' component={CardPage} />
          </Switch>
        </MuiThemeProvider>
      </TotalContextProvider>
    </Router>
  );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}