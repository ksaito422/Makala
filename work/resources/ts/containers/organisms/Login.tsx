import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/atoms/Button';
import { TextForm } from '../../components/atoms/TextForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Avatar,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export const Login: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Container maxWidth='sm'>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography>
          ログイン
        </Typography>
        <form noValidate>
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
        <Grid container spacing={10}>
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