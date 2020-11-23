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
  nameOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  mailOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  passwordOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  passConfirmOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  registerOnClick: () => void,
  cancelOnClick: () => void,
  error: string | null,
}

export const SignUp: React.FC<Props> = props => {
  // cssの定義
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='sm' className={classes.auth}>
        <Typography variant='h4'>makalaへようこそ</Typography>
        <Typography variant='subtitle1'>新規登録（無料）して利用を開始しましょう。</Typography>
        <form noValidate className={classes.auth_form}>
          <TextForm
            fullWidth
            required
            margin='normal'
            label="ユーザー名"
            name="name"
            autoFocus
            autoComplete="name"
            onChange={props.nameOnChange}
          />
          <TextForm
            fullWidth
            required
            margin='normal'
            label="メールアドレス"
            name="email"
            autoComplete="email"
            onChange={props.mailOnChange}
          />
          <TextForm
            fullWidth
            required
            margin='normal'
            label="パスワード"
            name="password"
            type='password'
            autoComplete="current-password"
            onChange={props.passwordOnChange}
          />
          <TextForm
            fullWidth
            required
            margin='normal'
            label="再確認パスワード"
            name="password"
            type='password'
            autoComplete="current-password"
            onChange={props.passConfirmOnChange}
          />
        </form>
        {/* [登録する]時にエラーあれば、エラーメッセージを表示する */}
        {props.error ? (
          <Typography color='error'>{props.error}</Typography>
          ) : (
          null)
        }
        <Container maxWidth='sm'>
          <Grid container spacing={10} className={classes.main_container}>
            <Grid item xs={6}>
              <Button
                fullWidth
                onClick={props.registerOnClick}
              >
                登録する
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