import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { PrivateRoute } from './routes/PrivateRoute';
import { GuestRoute } from './routes/GuestRoute';
import { TotalContextProvider } from './contexts/TotalContext';
import { TopPage } from './containers/pages/TopPage';
import { RulesPage } from './containers/pages/RulesPage';
import { PrivacyPage } from './containers/pages/PrivacyPage';
import { LoginPage } from './containers/pages/LoginPage';
import { RegisterPage } from './containers/pages/RegisterPage';
import { HomePage } from './containers/pages/HomePage';
import { CardPage } from './containers/pages/CardPage';
import { SettingAccountPage } from './containers/pages/SettingAccountPage';
import { AccountReleasePage } from './containers/pages/AccountReleasePage';
import { MuiTheme } from './theme/MuiTheme';
import { Auth } from './Auth/Auth';

const App: React.FC = () => {
  return (
    <Router>
      <TotalContextProvider>
        <MuiThemeProvider theme={MuiTheme}>
          <Auth>
            <Switch>
              <Route exact path='/' component={TopPage} />
              <Route exact path='/rules' component={RulesPage} />
              <Route exact path='/privacy' component={PrivacyPage} />
              <GuestRoute exact path='/login' component={LoginPage} />
              <GuestRoute exact path='/register' component={RegisterPage} />
              <PrivateRoute exact path='/:user/home' component={HomePage} />
              <PrivateRoute exact path='/:user/:card/cards/' component={CardPage} />
              <PrivateRoute exact path='/:user/settings/account' component={SettingAccountPage} />
              <PrivateRoute
                exact
                path='/:user/settings/account/release'
                component={AccountReleasePage}
              />
            </Switch>
          </Auth>
        </MuiThemeProvider>
      </TotalContextProvider>
    </Router>
  );
};

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
