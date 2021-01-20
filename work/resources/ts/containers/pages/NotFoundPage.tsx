import React, { useContext } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { Header } from '../organisms/Header';
import { NotFound } from '../organisms/NotFound';
import { Footer } from '../organisms/Footer';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const NotFoundPage: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <NotFound />
      </Container>
      <Footer />
    </>
  );
};
