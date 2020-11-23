import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Login } from '../organisms/Login';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const LoginPage: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Login
          loginOnClick={() => {
            // ログインのロジックをあとで書く
            history.push('/home');
          }}
          cancelOnClick={() => {
            history.push('/');
          }}
        />
      </Container>
    </>
  );
}