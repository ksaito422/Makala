import React from 'react';
import { Header } from '../organisms/Header';
import { Device } from '../organisms/Device';
import {
  CssBaseline,
} from '@material-ui/core';


export const HomePage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header
        title={'makala'}
      />
      <Device />
    </>
  )
}
