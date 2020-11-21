import React from 'react';
import { Header } from '../organisms/Header';
import { Tutorial } from '../organisms/Tutorial';
import {
  Container,
  CssBaseline,
  Grid,
  // useMediaQuery,
} from '@material-ui/core';

export const Top: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header
        title='makala'
      />
      <Tutorial />
    </>
  )
}