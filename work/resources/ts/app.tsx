import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TotalContextProvider } from './contexts/TotalContext';
import { HomePage } from './containers/pages/HomePage';
import { MuiTheme } from './theme/MuiTheme';
import { MuiThemeProvider } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Router>
      <TotalContextProvider>
        <Switch>
          <MuiThemeProvider theme={MuiTheme}>
            <Route exact path='/' component={HomePage}></Route>
          </MuiThemeProvider>
        </Switch>
      </TotalContextProvider>
    </Router>
  );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}