import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { SignUp } from '../organisms/SignUp';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const SignUpPage: React.FC = () => {
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
        <SignUp
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
            // パスワードが両方で合っているかの確認 違えばエラーメッセージを返す
            authState.password === authState.passConfirm ? (
              history.push('/sign-up/confirm')
            ) : (
              setAuthState({ ...authState, authError: 'パスワードが再確認パスワードと一致しません。' })
            );
          }}
          cancelOnClick={() => {
            // エラー内容が永続されるため、nullにしてから戻る
            setAuthState({ ...authState, authError: null })
            history.push('/');
          }}
          error={authState.authError}
        />
      </Container>
    </>
  )
}