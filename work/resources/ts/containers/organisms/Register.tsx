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
  registerOnClick: () => void,
  cancelOnClick: () => void,
}

export const Register: React.FC<Props> = props => {
  // cssの定義
  // API import of react-hook-form
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  return (
    <>
      <Container maxWidth='sm' className={classes.auth}>
        <Typography variant='h4'>makalaへようこそ</Typography>
        <Typography variant='subtitle1'>新規登録（無料）して利用を開始しましょう。</Typography>
        <form
          className={classes.auth_form}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            // props.registerOnClick(data);
          })}
        >
          <TextForm
            fullWidth
            margin='normal'
            label="ユーザー名"
            name="name"
            autoFocus
            autoComplete="name"
            inputRef={
              register({
                required: 'ユーザー名を入力して下さい',
                minLength: { value: 3, message: 'ユーザー名は3文字以上20文字以下で入力して下さい' },
                maxLength: { value: 20, message: 'ユーザー名は3文字以上20文字以下で入力して下さい' },
                pattern: {
                  value: /^[a-zA-Z0-9][a-zA-Z0-9_.-]+[a-zA-Z0-9]$/,
                  message: 'ユーザ名は半角英数字及び_.-のみ利用可能です。（_.-は先頭と末尾には使えません）'
                },
              })
            }
            error={Boolean(errors.name)}
            helperText={errors.name && errors.name.message}
          />
          <TextForm
            fullWidth
            margin='normal'
            label="メールアドレス"
            name="email"
            autoComplete="email"
          />
          <TextForm
            fullWidth
            margin='normal'
            label="パスワード"
            name="password"
            type='password'
            autoComplete="current-password"
          />
          <TextForm
            fullWidth
            margin='normal'
            label="再確認パスワード"
            name="password"
            type='password'
            autoComplete="current-password"
          />
        <Container maxWidth='sm'>
          <Grid container spacing={10} className={classes.main_container}>
            <Grid item xs={6}>
              <Button
                type='submit'
                fullWidth
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
        </form>
      </Container>
    </>
  );
}