import React, { useContext } from 'react';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import { Spinner } from '../../components/molecules/Spinner';
import { Notice } from '../../components/molecules/Notice';
import { Header } from '../organisms/Header';
import { SettingList } from '../organisms/SettingList';
import { Account } from '../organisms/Account';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { ApiAccountContext } from '../../contexts/childContexts/ApiAccountContext';
import { FeedbackContext } from '../../contexts/childContexts/FeedbackContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const SettingAccountPage: React.FC = () => {
  /**
   * { スピナー, api通信の結果通知の状態管理 }
   * cssの定義
   * アカウント情報の読み込み
   */
  const { progress, status, setStatus } = useContext<any>(FeedbackContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { authUserState } = useContext<any>(AuthContext);
  const { changeName, changeEmail } = useContext<any>(ApiAccountContext);

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='md' className={classes.main_container}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <SettingList />
          </Grid>
          <Grid item xs={8}>
            <Account
              name={authUserState.name}
              email={authUserState.email}
              nameChangeOnClick={(name, userId) => {
                changeName(name, userId);
              }}
              emailChangeOnClick={(newEmail, email, password, userId) => {
                changeEmail(newEmail, email, password, userId);
              }}
            />
          </Grid>
        </Grid>
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
};
