import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/atoms/Button';
import { TextForm } from '../../components/atoms/TextForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

export const Login: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Container maxWidth='sm' className={classes.auth}>
        <Typography variant='h4'>makalaにログイン</Typography>
        <form noValidate className={classes.auth_form}>
          <TextForm
            fullWidth
            required
            margin='normal'
            label="Email Address"
            name="email"
            autoFocus
            autoComplete="email"
          />
          <TextForm
            fullWidth
            required
            margin='normal'
            label="Password"
            name="password"
            type='password'
            autoComplete="current-password"
          />
        </form>
        <Grid container spacing={10} className={classes.main_container}>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={() => {
                // ログインapi利用のロジックを書く
                console.log('sign in');
                history.push('/home');
              }}
            >
              ログイン
           </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={() => {
                history.push('/');
              }}
            >
              キャンセル
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}