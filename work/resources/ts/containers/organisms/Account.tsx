import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import { TextForm } from '../../components/atoms/TextForm';
import { PasswordForm } from '../../components/atoms/PasswordForm';
import { Button } from '../../components/atoms/Button';
import { ModalWindow } from '../../components/molecules/ModalWindow';
import { ModalAccountName } from '../../components/molecules/ModalAccountName';
import { ModalAccountEmail } from '../../components/molecules/ModalAccountEmail';
import { ModalPropsContext } from '../../contexts/childContexts/ModalPropsContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  name: string;
  email: string;
  nameChangeOnClick: (name: string) => void;
  emailChangeOnClick: (newEmail: string, email: string, password: string, user: number) => void;
  passwordChangeOnClick: (password: string, newPassword: string) => void;
  accountRelease: () => void;
};

export const Account: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * API import of react-hook-form
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const {
    modalOpenState,
    setModalOpenState,
    modalChangeName,
    setModalChangeName,
    modalChangeEmail,
    setModalChangeEmail,
  } = useContext<any>(ModalPropsContext);

  const modalClose = () => {
    setModalOpenState(false);
    setModalChangeName(false);
    setModalChangeEmail(false);
  };

  return (
    <>
      <Container maxWidth='md'>
        <Typography variant='h5' align='center'>
          アカウント
        </Typography>
        <Typography variant='subtitle2' align='center' color='textSecondary'>
          登録情報の変更ができます。
        </Typography>
        <Paper elevation={2} className={classes.setting_contents}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant='h6'>基本情報</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2'>現在のユーザー名</Typography>
              <TextForm fullWidth value={props.name} disabled />
              <div className={classes.account_button}>
                <Button
                  onClick={() => {
                    setModalOpenState(true);
                    setModalChangeName(true);
                  }}
                >
                  変更する
                </Button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2'>現在のメールアドレス</Typography>
              <TextForm fullWidth value={props.email} disabled />
              <div className={classes.account_button}>
                <Button
                  onClick={() => {
                    setModalOpenState(true);
                    setModalChangeEmail(true);
                  }}
                >
                  変更する
                </Button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2'>パスワード</Typography>
              <form
                onSubmit={handleSubmit((data, e: any) => {
                  props.passwordChangeOnClick(data.password, data.newPassword);
                  // 変更ボタンをクリック後にフォームリセットする
                  e.target.reset();
                })}
              >
                <PasswordForm
                  fullWidth
                  label='現在のパスワードを入力'
                  name='password'
                  inputRef={register({
                    required: ' 現在のパスワードを入力して下さい',
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password && errors.password.message}
                />
                <PasswordForm
                  fullWidth
                  label='新しいパスワードを入力'
                  name='newPassword'
                  inputRef={register({
                    required: ' 新しいパスワードを入力して下さい',
                  })}
                  error={Boolean(errors.newPassword)}
                  helperText={errors.newPassword && errors.newPassword.message}
                />
                <div className={classes.centerPlacement}>
                  <Button type='submit'>パスワードを変更する</Button>
                </div>
              </form>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2' className={classes.account_release}>
                アカウント削除
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                ※ 一度アカウントを削除すると、二度と元に戻せません。十分ご注意ください。
              </Typography>
              <Box m={2} className={classes.centerPlacement}>
                <Button className={classes.account_release_button} onClick={props.accountRelease}>
                  アカウントを削除する
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* アカウント情報の変更時に表示するモーダルを定義する */}
      <ModalWindow modalOpen={modalOpenState} modalOnClose={modalClose}>
        {modalChangeName && (
          <ModalAccountName
            nameChangeOnClick={(data) => {
              props.nameChangeOnClick(data);
              modalClose();
            }}
            modalOnClose={modalClose}
          />
        )}
        {modalChangeEmail && (
          <ModalAccountEmail
            emailChangeOnClick={(newEmail, email, password, userId) => {
              props.emailChangeOnClick(newEmail, email, password, userId);
              modalClose();
            }}
            modalOnClose={modalClose}
          />
        )}
      </ModalWindow>
    </>
  );
};
