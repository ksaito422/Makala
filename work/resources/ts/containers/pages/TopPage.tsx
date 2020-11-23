import React, { useContext } from 'react';
import { Header } from '../organisms/Header';
import { Tutorial } from '../organisms/Tutorial';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
  Grid,
  // useMediaQuery,
} from '@material-ui/core';

export const TopPage: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header
        title='makala'
      />
      <Container maxWidth='xl' className={classes.main_container}>
        <Tutorial/>
      </Container>
    </>
  )
}