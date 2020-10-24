import React from 'react';
import { Header } from '../organisms/Header';
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
    </>
  )
}