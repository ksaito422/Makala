import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from '../../components/molecules/Spinner';
import { Header } from '../organisms/Header';
import { Login } from '../organisms/Login';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { FeedbackContext } from '../../contexts/childContexts/FeedbackContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const LoginPage: React.FC = () => {
  /** 認証関連のロジック
   * api通信中のスピナー表示のon/off管理
   * cssの定義
   * react-router-dom URLルーティングに使う
   */
  const { authState, setAuthState, isAuth, authLogin, authMe } = useContext<any>(AuthContext);
  const { progress } = useContext<any>(FeedbackContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  // api通信中にローディングアイコンを出したい
  useEffect(() => {
    authMe();
  }, []);

  return (
    <>
      <Spinner open={progress} />
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
          }}
          cancelOnClick={() => {
            history.push('/');
          }}
        />
      </Container>
    </>
  );
}