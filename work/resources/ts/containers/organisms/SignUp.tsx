import React, { useContext } from 'react';
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

export const SignUp: React.FC = () => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Container maxWidth='sm' className={classes.auth}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography>
          アカウント作成
        </Typography>
        <form noValidate className={classes.auth_form}>
          <TextForm
            fullWidth
            required
            margin='normal'
            label="ユーザー名"
            name="name"
            autoFocus
            autoComplete="name"
          />
          <TextForm
            fullWidth
            required
            margin='normal'
            label="メールアドレス"
            name="email"
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
          <TextForm
            fullWidth
            required
            margin='normal'
            label="パスワード再確認"
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
                // 新規登録api利用のロジックを書く
                history.push('/sign-up/confirm');
              }}
            >
              新規登録
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