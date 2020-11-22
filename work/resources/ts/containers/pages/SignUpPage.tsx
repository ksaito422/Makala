import React, { useContext } from 'react';
import { Header } from '../organisms/Header';
import { SignUp } from '../organisms/SignUp';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
  Grid,
  // useMediaQuery,
} from '@material-ui/core';

export const SignUpPage: React.FC = () => {
  const { authState, setAuthState } = useContext<any>(AuthContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header
        title='makala'
      />
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
            setAuthState({ ...authState, pass_confirm: e.target.value });
          }}
        />
      </Container>
    </>
  )
}