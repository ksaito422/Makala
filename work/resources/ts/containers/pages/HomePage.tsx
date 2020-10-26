import React, { useContext } from 'react';
import { Header } from '../organisms/Header';
import { Device } from '../organisms/Device';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
  Grid,
} from '@material-ui/core';

export const HomePage: React.FC = () => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Header
        title={'makala'}
      />
      <Container maxWidth='xl' className={classes.main_container}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Container maxWidth='xl'>
              <Device />
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container maxWidth='xl'>
              <p>プレビュー画面が入ります</p>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
