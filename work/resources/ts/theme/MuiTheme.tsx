import { createMuiTheme } from '@material-ui/core';
import { deepPurple, yellow } from '@material-ui/core/colors';

export const MuiTheme = createMuiTheme({
  // ページ全体で使うテーマカラーの定義
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
    // Buttonタグ内のテキストを入力したままの状態で表示する
    MuiButton: {
      root: {
        textTransform: `none`,
      }
    },
    // ListItemTextの中央寄せを解除 ~use Board.tsx~
    MuiListItemText: {
      root: {
        flex: `none`,
      }
    }
  }
});