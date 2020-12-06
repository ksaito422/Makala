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
  /** 認証関連のロジック
   * cssの定義
   * react-router-dom URLルーティングに使う
   */
  const { authState, setAuthState } = useContext<any>(AuthContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Register
          // 認証情報をstateに保持していく
          nameOnChange={(e) => {
            setAuthState({ ...authState, name: e.target.value });
          }}
          mailOnChange={(e) => {
            setAuthState({ ...authState, email: e.target.value });
          }}
          passwordOnChange={(e) => {
            setAuthState({ ...authState, password: e.target.value });
          }}
          passConfirmOnChange={(e) => {
            setAuthState({ ...authState, passConfirm: e.target.value });
          }}
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