import React, { useContext } from 'react';
import { Header } from '../organisms/Header';
import { Confirm } from '../organisms/Confirm';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
  Grid,
  // useMediaQuery,
} from '@material-ui/core';

export const ConfirmPage: React.FC = () => {
  const { authState } = useContext<any>(AuthContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header
        title='makala'
      />
      <Container maxWidth='xl' className={classes.main_container}>
        <Confirm
          // 認証情報の再確認のため表示するデータを渡す
          name={authState.name}
          email={authState.email}
          password={authState.password}
          pass_confirm={authState.pass_confirm}
        />
      </Container>
    </>
  )
}