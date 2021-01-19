import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Container, Grid, Typography, Paper, useMediaQuery } from '@material-ui/core';
import { Button } from '../../components/atoms/Button';
import { TextForm } from '../../components/atoms/TextForm';
import { PasswordForm } from '../../components/atoms/PasswordForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  registerOnClick: (data: { [x: string]: any }) => void;
  cancelOnClick: () => void;
  guestOnClick: () => void;
};

export const Register: React.FC<Props> = (props) => {
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
   * CommonRegister and CommonCancelはボタンの共通化
   * classNameはuseStylesのスタイルをインポート
   * returnはスマホとタブレット以上の画面サイズで表示レイアウトを切り替えている
   */
  const ReasponsiveComponent: React.FC = () => {
    const CommonRegister = () => {
      return (
        <Button type='submit' fullWidth>
          登録
        </Button>
      );
    };
    const CommonCancel = () => {
      return (
        <Button fullWidth onClick={props.cancelOnClick}>
          キャンセル
        </Button>
      );
    };
    const className = classes.register_button;

    return (
      <>
        {matches ? (
          <Grid container spacing={4} className={className}>
            <Grid item xs={6}>
              <CommonRegister />
            </Grid>
            <Grid item xs={6}>
              <CommonCancel />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={4} className={className}>
            <Grid item xs={12}>
              <CommonRegister />
            </Grid>
            <Grid item xs={12}>
              <CommonCancel />
            </Grid>
          </Grid>
        )}
      </>
    );
  };

  return (
    <>
      <Container maxWidth='sm'>
        <Paper elevation={2} className={classes.paper}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant='h4' align='center'>
                Makalaへようこそ
              </Typography>
              <Typography variant='subtitle1' align='center'>
                新規登録（無料）して利用を開始しましょう。
              </Typography>
              <form
                className={classes.auth_form}
                onSubmit={handleSubmit((data) => {
                  props.registerOnClick(data);
                })}
              >
                <TextForm
                  fullWidth
                  margin='normal'
                  label='ユーザー名'
                  name='name'
                  autoFocus
                  autoComplete='name'
                  inputRef={register({
                    required: 'ユーザー名を入力して下さい',
                    minLength: {
                      value: 3,
                      message: 'ユーザー名は3文字以上20文字以下で入力して下さい',
                    },
                    maxLength: {
                      value: 20,
                      message: 'ユーザー名は3文字以上20文字以下で入力して下さい',
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9][a-zA-Z0-9_.-]+[a-zA-Z0-9]$/,
                      message:
                        'ユーザ名は半角英数字及び_.-のみ利用可能です。（_.-は先頭と末尾には使えません）',
                    },
                  })}
                  error={Boolean(errors.name)}
                  helperText={errors.name && errors.name.message}
                />
                <TextForm
                  fullWidth
                  margin='normal'
                  label='メールアドレス'
                  name='email'
                  autoComplete='email'
                  inputRef={register({
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  error={Boolean(errors.email)}
                  helperText={errors.email && 'メールアドレスを入力してください'}
                />
                <PasswordForm
                  fullWidth
                  label='パスワード'
                  name='password'
                  inputRef={register({
                    required: ' パスワードを入力して下さい',
                    minLength: {
                      value: 8,
                      message: 'パスワードを8文字以上20文字以下で入力して下さい',
                    },
                    maxLength: {
                      value: 20,
                      message: 'パスワードを8文字以上20文字以下で入力して下さい',
                    },
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password && errors.password.message}
                />
                <Box component='div' m={2} className={classes.centerPlacement}>
                  <Link to='/rules'>利用規約</Link>
                  及び
                  <Link to='/privacy'>プライバシーポリシー</Link>
                  に同意の上ご利用ください。
                </Box>
                <Container maxWidth='sm'>
                  <ReasponsiveComponent />
                </Container>
              </form>
            </Grid>
            <Grid item xs={12} className={classes.guset_container}>
              <Typography
                variant='h5'
                align='center'
                color='textSecondary'
                className={classes.guest_title}
              >
                ゲストログイン
              </Typography>
              <Typography
                variant='subtitle2'
                color='textSecondary'
                className={classes.guest_explanation}
              >
                ゲストでログインしてMakalaの機能を試すことができます。
              </Typography>
              <Typography variant='caption' color='textSecondary'>
                ※ ゲストアカウントは他のユーザーと共有です。
                <br />
                ※ 一部機能を制限しています。
                <br />
                ※ 投稿が削除される恐れがあるため、お試しとしてご利用ください。
                <br />
              </Typography>
              <Container maxWidth='md' className={classes.auth_login}>
                <Button size='large' onClick={props.guestOnClick}>
                  ゲストログイン
                </Button>
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
