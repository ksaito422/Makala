import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Tutorial } from '../organisms/Tutorial';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const TopPage: React.FC = () => {
  /**
   * { ログインユーザーの情報 }
   * cssの定義
   * react-router-dom URLルーティングに使う
   */
  const { authUserState } = useContext<any>(AuthContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Tutorial
          registerOnClick={() => {
            history.push('/register');
          }}
          loginOnClick={() => {
            history.push('/login');
          }}
          boardOnClick={() => {
            history.push(`/${authUserState.name}/home`)
          }}
        />
      </Container>
    </>
  );
}