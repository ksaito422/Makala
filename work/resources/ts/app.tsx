import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import { blue, deepPurple } from '@material-ui/core/colors';
import { HomePage } from './containers/pages/HomePage';

// ページ全体で使うテーマカラーの定義
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
  }
})

const App: React.FC = () => {
    return (
      <Router>
        <Switch>
          <MuiThemeProvider theme={theme}>
            <Route exact path='/' component={HomePage}></Route>
          </MuiThemeProvider>
        </Switch>
      </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}