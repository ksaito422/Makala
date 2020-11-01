import React from 'react';
import {
  createMuiTheme,
  MuiThemeProvider,
  Typography,
} from '@material-ui/core';

// Titleにだけ使うフォントの設定
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'fantasy',
      'Comic Sans MS',
      'arial',
      'sans-serif',
    ].join(','),
  },
});

type Props = {
  title: string;
}

export const Title: React.FC<Props> = (props) => {
  return (
      <MuiThemeProvider theme={theme}>
        <Typography
          color={'inherit'}
          component={'h1'}
          variant={'h3'}
        >
          {props.title}
        </Typography>
      </MuiThemeProvider>
  )
}
