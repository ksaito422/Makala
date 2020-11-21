import React, { useContext } from 'react';
import { Header } from '../organisms/Header';
import { Login } from '../organisms/Login';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
  Grid,
  // useMediaQuery,
} from '@material-ui/core';

export const LoginPage: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header
        title='makala'
      />
      <Container maxWidth='xl' className={classes.main_container}>
        <Login />
      </Container>
    </>
  )
}