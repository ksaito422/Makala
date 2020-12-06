import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Login } from '../organisms/Login';
import { Spinner } from '../../components/molecules/Spinner';
import { Notice } from '../../components/molecules/Notice';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { FeedbackContext } from '../../contexts/childContexts/FeedbackContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const LoginPage: React.FC = () => {
  /** Login api import
   * api通信中のスピナー表示のon/off管理
   * cssの定義
   * react-router-dom URLルーティングに使う
   */
  const { authLogin } = useContext<any>(AuthContext);
  const { progress, status, setStatus } = useContext<any>(FeedbackContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Login
          loginOnClick={(data) => {
            authLogin(data);
          }}
          cancelOnClick={() => {
            history.push('/');
          }}
        />
      </Container>

      <Spinner open={progress} />
      <Notice
        open={status.open}
        type={status.type}
        message={status.message}
        onClose={() => {
          setStatus({ ...status, open: false });
        }}
      />
    </>
  );
}