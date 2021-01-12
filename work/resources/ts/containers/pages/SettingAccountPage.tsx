import React, { useContext } from 'react';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import { Header } from '../organisms/Header';
import { SettingList } from '../organisms/SettingList';
import { Account } from '../organisms/Account';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { ApiAccountContext } from '../../contexts/childContexts/ApiAccountContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const SettingAccountPage: React.FC = () => {
  /**
   * cssの定義
   * アカウント情報の読み込み
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { authUserState } = useContext<any>(AuthContext);
  const { changeName } = useContext<any>(ApiAccountContext);

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
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
