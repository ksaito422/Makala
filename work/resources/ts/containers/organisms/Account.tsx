import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { TextForm } from '../../components/atoms/TextForm';
import { Button } from '../../components/atoms/Button';
import { ModalWindow } from '../../components/molecules/ModalWindow';
import { ModalAccountName } from '../../components/molecules/ModalAccountName';
import { ModalAccountEmail } from '../../components/molecules/ModalAccountEmail';
import { ModalPropsContext } from '../../contexts/childContexts/ModalPropsContext';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  name: string;
  email: string;
  nameChangeOnClick: (name: string, user: number) => void;
  emailChangeOnClick: (newEmail: string, email: string, password: string, user: number) => void;
  passwordChangeOnClick: (
    password: string,
    newPassword: string,
    email: string,
    user: number
  ) => void;
};

export const Account: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * アカウント情報の読み込み
   * API import of react-hook-form
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { authUserState } = useContext<any>(AuthContext);
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
              <Typography variant='subtitle2'>ユーザー名</Typography>
              <TextForm fullWidth defaultValue={props.name} disabled />
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
              <Typography variant='subtitle2'>メールアドレス</Typography>
              <TextForm fullWidth defaultValue={props.email} disabled />
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
                onSubmit={handleSubmit((data) => {
                  props.passwordChangeOnClick(
                    data.password,
                    data.newPassword,
                    authUserState.email,
                    authUserState.id
                  );
                })}
              >
                <TextForm
                  fullWidth
                  margin='normal'
                  label='現在のパスワードを入力'
                  name='password'
                  type='password'
                  inputRef={register({
                    required: ' 現在のパスワードを入力して下さい',
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password && errors.password.message}
                />
                <TextForm
                  fullWidth
                  margin='normal'
                  label='新しいパスワードを入力'
                  name='newPassword'
                  type='password'
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
          </Grid>
        </Paper>
      </Container>

      {/* アカウント情報の変更時に表示するモーダルを定義する */}
      <ModalWindow modalOpen={modalOpenState} modalOnClose={modalClose}>
        {modalChangeName && (
          <ModalAccountName
            nameChangeOnClick={(data, userId) => {
              props.nameChangeOnClick(data, userId);
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
