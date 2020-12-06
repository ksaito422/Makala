import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Register } from '../organisms/Register';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const RegisterPage: React.FC = () => {
  /** cssの定義
   * react-router-dom URLルーティングに使う
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Register
          registerOnClick={() => {
            history.push('/sign-up/confirm');
          }}
          cancelOnClick={() => {
            history.push('/');
          }}
        />
      </Container>
    </>
  )
}