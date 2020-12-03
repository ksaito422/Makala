import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/atoms/Button';
import { TextForm } from '../../components/atoms/TextForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

type Props = {
  mailOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  passwordOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  loginOnClick: () => void,
  cancelOnClick: () => void,
}

export const Login: React.FC<Props> = (props) => {
  // cssの定義
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  return (
    <>
      <Container maxWidth='sm' className={classes.auth}>
        <Typography variant='h4'>makalaにログイン</Typography>
        <form
          className={classes.auth_form}
          onSubmit={handleSubmit(props.loginOnClick)}
        >
          <TextForm
            fullWidth
            margin='normal'
            label="メールアドレス"
            name="email"
            autoFocus
            autoComplete="email"
            inputRef={register({
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            })}
            error={Boolean(errors.email)}
            helperText={errors.email && 'メールアドレスを入力してください'}
            onChange={props.mailOnChange}
          />
          <TextForm
            fullWidth
            margin='normal'
            label="パスワード"
            name="password"
            type='password'
            autoComplete="current-password"
            inputRef={register({
              required: ' パスワードを入力して下さい',
              minLength: {
                value: 8,
                message: 'パスワードを8文字以上20文字以下で入力して下さい'
              },
              maxLength: {
                value: 20,
                message: 'パスワードを8文字以上20文字以下で入力して下さい'
              }
            })}
            error={Boolean(errors.password)}
            helperText={
              errors.password && errors.password.message
            }
            onChange={props.passwordOnChange}
          />
          <Container maxWidth='sm'>
          <Grid container spacing={10} className={classes.main_container}>
            <Grid item xs={6}>
              <Button
                type='submit'
                fullWidth
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
        </form>
      </Container>
    </>
  );
}