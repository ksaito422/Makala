import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import { blue, deepPurple } from '@material-ui/core/colors';
import { TotalContextProvider } from './contexts/TotalContext';
import { HomePage } from './containers/pages/HomePage';

// ページ全体で使うテーマカラー, フォントの定義
const theme = createMuiTheme({
  palette: {
    primary: {
      light: deepPurple[300],
      main: deepPurple[500],
      dark: deepPurple[700],
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  },
  typography: {
    fontFamily: [
      'fantasy',
      'Comic Sans MS',
      'arial',
      'sans-serif',
    ].join(','),
  },
});

const App: React.FC = () => {
    return (
      <Router>
        <TotalContextProvider>
          <Switch>
            <MuiThemeProvider theme={theme}>
              <Route exact path='/' component={HomePage}></Route>
            </MuiThemeProvider>
          </Switch>
        </TotalContextProvider>
      </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}