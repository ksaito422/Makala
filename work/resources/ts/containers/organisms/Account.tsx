import React, { useContext } from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { TextForm } from '../../components/atoms/TextForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  name: string;
  email: string;
};

export const Account: React.FC<Props> = (props) => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h6'>基本情報</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2'>ユーザー名</Typography>
              <TextForm fullWidth defaultValue={props.name} disabled />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2'>メールアドレス</Typography>
              <TextForm fullWidth defaultValue={props.email} disabled />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2'>パスワード</Typography>
              <TextForm fullWidth defaultValue='password' disabled type='password' />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
