import { createMuiTheme } from '@material-ui/core';
import { blue, deepPurple, yellow } from '@material-ui/core/colors';

// ページ全体で使うテーマカラーの定義
export const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      light: deepPurple[300],
      main: deepPurple[500],
      dark: deepPurple[700],
    },
    secondary: {
      light: yellow[100],
      main: yellow[500],
      dark: yellow[900],
    },
    // secondary: {
    //   light: blue[300],
    //   main: blue[500],
    //   dark: blue[700],
    // },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: `none`,
      },
      label: {
        // justifyContent: `none`,
      }
    },
    MuiListItemText: {
      root: {
        flex: `none`,
      }
    }
  }
});