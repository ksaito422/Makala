import React, { useContext } from 'react';
import { Button } from '../../components/atoms/Button';
import { TextForm } from '../../components/atoms/TextForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

type Props = {
  loginOnClick: () => void,
  cancelOnClick: () => void,
}

export const Login: React.FC<Props> = (props) => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='sm' className={classes.auth}>
        <Typography variant='h4'>makalaにログイン</Typography>
        <form noValidate className={classes.auth_form}>
          <TextForm
            fullWidth
            required
            margin='normal'
            label="メールアドレス"
            name="email"
            autoFocus
            autoComplete="email"
          />
          <TextForm
            fullWidth
            required
            margin='normal'
            label="パスワード"
            name="password"
            type='password'
            autoComplete="current-password"
          />
        </form>
        <Container maxWidth='sm'>
          <Grid container spacing={10} className={classes.main_container}>
            <Grid item xs={6}>
              <Button
                fullWidth
                onClick={props.loginOnClick}
              >
                ログインする
            </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                onClick={props.cancelOnClick}
              >
                キャンセル
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}