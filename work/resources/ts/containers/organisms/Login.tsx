import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/atoms/Button';
import { TextForm } from '../../components/atoms/TextForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

type Props = {
  loginOnClick: (data: {[x: string]: any}) => void,
  cancelOnClick: () => void,
}

export const Login: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * API import of react-hook-form
   * スマホ( > 600px)を基準にレスポンシブ対応
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const matches = useMediaQuery('(min-width: 601px)');

  /**
   * 共通コンポーネント化
   * CommonLogin and CommonCancelはボタンの共通化
   * classNameはuseStylesのスタイルをインポート
   * returnはスマホとタブレット以上の画面サイズで表示レイアウトを切り替えている
   */
  const ResponsiveComponent: React.FC = () => {
    const CommonLogin = () => {
      return (
        <Button type='submit' fullWidth>
          ログインする
        </Button>
      );
    }
    const CommonCancel = () => {
      return (
        <Button fullWidth onClick={props.cancelOnClick}>
          キャンセル
        </Button>
      );
    }
    const className = classes.main_container;

    return (
      <>
        {matches ? (
          <Grid container spacing={10} className={className}>
            <Grid item xs={6}>
              <CommonLogin />
            </Grid>
            <Grid item xs={6}>
              <CommonCancel />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={4} className={className}>
            <Grid item xs={12}>
              <CommonLogin />
            </Grid>
            <Grid item xs={12}>
              <CommonCancel />
            </Grid>
          </Grid>
        )}
      </>
    );
  }

  return (
    <>
      <Container maxWidth='sm' className={classes.auth}>
        <Typography variant='h4'>makalaにログイン</Typography>
        <form
          className={classes.auth_form}
          onSubmit={handleSubmit((data) => {
            props.loginOnClick(data)
          })}
        >
          <TextForm
            fullWidth
            margin='normal'
            label='メールアドレス'
            name='email'
            autoFocus
            autoComplete='email'
            inputRef={
              register({
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
              })
            }
            error={Boolean(errors.email)}
            helperText={errors.email && 'メールアドレスを入力してください'}
          />
          <TextForm
            fullWidth
            margin='normal'
            label='パスワード'
            name='password'
            type='password'
            autoComplete='current-password'
            inputRef={
              register({
                required: ' パスワードを入力して下さい',
                minLength: {
                  value: 8,
                  message: 'パスワードを8文字以上20文字以下で入力して下さい'
                },
                maxLength: {
                  value: 20,
                  message: 'パスワードを8文字以上20文字以下で入力して下さい'
                }
              })
            }
            error={Boolean(errors.password)}
            helperText={errors.password && errors.password.message}
          />
          <Container maxWidth='sm'>
            <ResponsiveComponent />
          </Container>
        </form>
      </Container>
    </>
  );
}