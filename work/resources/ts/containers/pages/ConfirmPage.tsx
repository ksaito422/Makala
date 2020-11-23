import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Confirm } from '../organisms/Confirm';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const ConfirmPage: React.FC = () => {
  /** 認証関連のロジック
   * cssの定義
   * react-router-dom URLルーティングに使う
   */
  const { authState } = useContext<any>(AuthContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Confirm
          // 認証情報の再確認のため表示するデータを渡す
          name={authState.name}
          email={authState.email}
          password={authState.password}
          registerOnClick={() => {
            // 登録用のロジックをあとで書く
            history.push('/home');
          }}
          cancelonClick={() => {
            history.push('/sign-up');
          }}
        />
      </Container>
    </>
  )
}