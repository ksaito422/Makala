import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Login } from '../organisms/Login';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const LoginPage: React.FC = () => {
  /** 認証関連のロジック
   * cssの定義
   * react-router-dom URLルーティングに使う
   */
  const { authState, setAuthState, isAuth, authLogin } = useContext<any>(AuthContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Login
          mailOnChange={(e) => {
            setAuthState({ ...authState, email: e.target.value });
          }}
          passwordOnChange={(e) => {
            setAuthState({ ...authState, password: e.target.value });
          }}
          loginOnClick={async () => {
            await authLogin();
            isAuth ? history.push('/home') : null;
          }}
          cancelOnClick={() => {
            history.push('/');
          }}
        />
      </Container>
    </>
  );
}