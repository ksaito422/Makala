import React, { useContext } from 'react';
import { Header } from '../organisms/Header';
import { Confirm } from '../organisms/Confirm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
  Grid,
  // useMediaQuery,
} from '@material-ui/core';

export const ConfirmPage: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header
        title='makala'
      />
      <Container maxWidth='xl' className={classes.main_container}>
        <Confirm />
      </Container>
    </>
  )
}