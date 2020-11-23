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
  name: string,
  email: string,
  password: string,
  registerOnClick: () => void,
  cancelonClick: () => void,
}

export const Confirm: React.FC<Props> = (props) => {
  // cssの定義
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='sm' className={classes.auth}>
        <Typography variant='subtitle1'>アカウント登録情報の確認</Typography>
        <form noValidate className={classes.auth_form}>
          <TextForm
            fullWidth
            required
            margin='normal'
            label="ユーザー名"
            name="name"
            autoFocus
            disabled
            autoComplete="name"
            defaultValue={props.name}
          />
          <TextForm
            fullWidth
            required
            margin='normal'
            label="メールアドレス"
            name="email"
            disabled
            autoComplete="email"
            defaultValue={props.email}
          />
          <TextForm
            fullWidth
            required
            margin='normal'
            label="パスワード"
            name="password"
            type='password'
            disabled
            autoComplete="current-password"
            defaultValue={props.password}
          />
        </form>
        <Typography variant='body1'>上記の内容で登録しますか？</Typography>
        <Container maxWidth='sm'>
          <Grid container spacing={10} className={classes.main_container}>
            <Grid item xs={6}>
              <Button
                fullWidth
                onClick={props.registerOnClick}
              >
                新規登録
            </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                onClick={props.cancelonClick}
              >
                戻る
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}