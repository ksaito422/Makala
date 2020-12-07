import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
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
  title: string,
}

export const Title: React.FC<Props> = (props) => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Typography
        color='inherit'
        component='h1'
        variant='h3'
      >
        <Link className={classes.Link} to='/'>
          {props.title}
        </Link>
      </Typography>
    </MuiThemeProvider>
  );
}
