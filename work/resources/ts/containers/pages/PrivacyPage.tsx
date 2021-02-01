import React, { useContext } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { Privacy } from '../organisms/Privacy';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const PrivacyPage: React.FC = () => {
  // cssの定義
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Privacy />
      </Container>
      <Footer />
    </>
  );
};
