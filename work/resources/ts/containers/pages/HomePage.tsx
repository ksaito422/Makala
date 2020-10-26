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
        <Device />
      </Container>
    </>
  )
}
