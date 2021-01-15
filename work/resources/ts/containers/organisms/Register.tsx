import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { Button } from '../../components/atoms/Button';
import { TextForm } from '../../components/atoms/TextForm';
import { PasswordForm } from '../../components/atoms/PasswordForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  registerOnClick: (data: { [x: string]: any }) => void;
  cancelOnClick: () => void;
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
          登録する
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
    const className = classes.main_container;

    return (
      <>
        {matches ? (
          <Grid container spacing={10} className={className}>
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
      <Container maxWidth='sm' className={classes.auth}>
        <Typography variant='h4'>makalaへようこそ</Typography>
        <Typography variant='subtitle1'>新規登録（無料）して利用を開始しましょう。</Typography>
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
              minLength: { value: 3, message: 'ユーザー名は3文字以上20文字以下で入力して下さい' },
              maxLength: { value: 20, message: 'ユーザー名は3文字以上20文字以下で入力して下さい' },
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
          <Container maxWidth='sm'>
            <ReasponsiveComponent />
          </Container>
        </form>
      </Container>
    </>
  );
};
