import { createMuiTheme } from '@material-ui/core';
import { deepPurple, yellow } from '@material-ui/core/colors';

// ページ全体で使うテーマカラーの定義
export const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      light: yellow[100],
      main: yellow[500],
      dark: yellow[900],
    },
    secondary: {
      light: deepPurple[300],
      main: deepPurple[500],
      dark: deepPurple[700],
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: `none`,
      },
    },
    MuiListItemText: {
      root: {
        flex: `none`,
      }
    }
  }
});