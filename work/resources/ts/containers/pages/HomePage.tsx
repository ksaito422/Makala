import React, { useContext } from 'react';
import { Header } from '../organisms/Header';
import { Boards } from '../organisms/Boards';

import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
  Grid,
  // useMediaQuery,
} from '@material-ui/core';

export const HomePage: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  const data = {
    'boards': [
      {
        'board_name': 'aaaaa'
      },
      {
        'board_name': 'bbbbb'
      },
      {
        'board_name': 'bbbbb'
      },
    ]
  }

  return (
    <>
      <CssBaseline />
      <Header
        title='makala'
      />
      <Container maxWidth='xl' className={classes.main_container}>
        <Boards
          data={data}
        />
      </Container>
    </>
  )
}