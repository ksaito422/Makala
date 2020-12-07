import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Tutorial } from '../organisms/Tutorial';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const TopPage: React.FC = () => {
  /**
   * cssの定義
   * react-router-dom URLルーティングに使う
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Tutorial
          registerOnClick={() => {
            history.push('/register');
          }}
          loginOnClick={() => {
            history.push('/login');
          }}
        />
      </Container>
    </>
  );
}