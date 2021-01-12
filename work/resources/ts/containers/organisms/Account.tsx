import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { TextForm } from '../../components/atoms/TextForm';
import { Button } from '../../components/atoms/Button';
import { ModalWindow } from '../../components/molecules/ModalWindow';
import { ModalAccountName } from '../../components/molecules/ModalAccountName';
import { ModalPropsContext } from '../../contexts/childContexts/ModalPropsContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  name: string;
  email: string;
  nameChangeOnClick: (data: string) => void;
};

export const Account: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * API import of react-hook-form
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const { modalOpenState, setModalOpenState } = useContext<any>(ModalPropsContext);

  const modalClose = () => {
    setModalOpenState(false);
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
                    console.log('email');
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
                  console.log('パスワードを変更しました');
                })}
              >
                <TextForm
                  fullWidth
                  margin='normal'
                  label='現在のパスワードを入力'
                  name='old_password'
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
                  name='new_password'
                  type='password'
                  inputRef={register({
                    required: ' 新しいパスワードを入力して下さい',
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password && errors.password.message}
                />
                <TextForm
                  fullWidth
                  margin='normal'
                  label='新しいパスワードを再入力'
                  name='new_password'
                  type='password'
                  inputRef={register({
                    required: ' 新しいパスワードを再入力して下さい',
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password && errors.password.message}
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
        <ModalAccountName
          nameChangeOnClick={(data) => {
            props.nameChangeOnClick(data);
          }}
        />
      </ModalWindow>
    </>
  );
};
