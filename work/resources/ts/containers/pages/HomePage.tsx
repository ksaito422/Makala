import React from 'react';
import { Header } from '../organisms/Header';
import { Device } from '../organisms/Device';
import {
  Container,
  CssBaseline,
  Grid,
} from '@material-ui/core';


export const HomePage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header
        title={'makala'}
      />
      <Container maxWidth='xl'>
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
