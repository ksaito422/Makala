import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { Button } from '../../components/atoms/Button';
import { PasswordForm } from '../../components/atoms/PasswordForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  releaseOnClick: (password: string) => void;
  cancelOnClick: () => void;
};

export const Release: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * API import of react-hook-form
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

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
              <Grid container spacing={4} className={classes.release_button}>
                <Grid item xs={6}>
                  <Button fullWidth type='submit'>
                    退会
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button fullWidth onClick={props.cancelOnClick}>
                    キャンセル
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </form>
        </Paper>
      </Container>
    </>
  );
};
