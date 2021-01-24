import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Grid, Paper, Typography, useMediaQuery } from '@material-ui/core';
import { Button } from '../../components/atoms/Button';
import { PasswordForm } from '../../components/atoms/PasswordForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  disabled: boolean;
  releaseOnClick: (password: string) => void;
  cancelOnClick: () => void;
};

export const Release: React.FC<Props> = (props) => {
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
   * CommonRelease and CommonCancelはボタンの共通化
   * classNameはuseStylesのスタイルをインポート
   * スマホとタブレット以上の画面サイズで表示レイアウトを切り替えている
   */
  const ResponsiveComponent: React.FC = () => {
    const CommonRelease = () => {
      return (
        <Button type='submit' fullWidth disabled={props.disabled}>
          退会
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
    const className = classes.release_button;

    return (
      <>
        {matches ? (
          <Grid container spacing={4} className={className}>
            <Grid item xs={6}>
              <CommonRelease />
            </Grid>
            <Grid item xs={6}>
              <CommonCancel />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={4} className={className}>
            <Grid item xs={12}>
              <CommonRelease />
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
      <Container maxWidth='md'>
        <Typography variant='h5' align='center'>
          退会する
        </Typography>
        <Typography variant='subtitle2' align='center' color='textSecondary'>
          一度アカウントを削除すると、二度と元に戻せません。十分ご注意ください。
        </Typography>
        <Paper elevation={2} className={classes.paper}>
          <Typography variant='subtitle2'>パスワードを入力して下さい</Typography>
          <form
            onSubmit={handleSubmit((data) => {
              props.releaseOnClick(data.password);
            })}
          >
            <PasswordForm
              fullWidth
              label='パスワード'
              name='password'
              inputRef={register({
                required: ' パスワードを入力して下さい',
              })}
              error={Boolean(errors.password)}
              helperText={errors.password && errors.password.message}
            />
            <Container maxWidth='sm'>
              <ResponsiveComponent />
            </Container>
          </form>
        </Paper>
      </Container>
    </>
  );
};
