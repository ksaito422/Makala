import React, { useContext } from 'react';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import { Header } from '../organisms/Header';
import { SettingList } from '../organisms/SettingList';
import { Account } from '../organisms/Account';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const SettingAccountPage: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

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
            <Account />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
