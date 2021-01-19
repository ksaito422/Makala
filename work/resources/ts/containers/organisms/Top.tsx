import React, { useContext } from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { Button } from '../../components/atoms/Button';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  registerOnClick: () => void;
  boardOnClick: () => void;
};

export const Top: React.FC<Props> = (props) => {
  /**
   * { 認証状態の確認 }
   * cssの定義
   */
  const { isAuth } = useContext<any>(AuthContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='md'>
        <Paper elevation={2} className={classes.paper}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant='h4' align='center'>
                Welcome to Makala.
              </Typography>
              <br />
              <Typography variant='subtitle1' align='center'>
                Makalaは、文章構成を考案・構築するためのサービスです。
                <br />
                いつ・どこにいても、ブログや記事の内容をささっと書き残すことができます。
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.centerPlacement}>
              {!isAuth ? (
                // ゲストユーザーなら表示
                <>
                  <Button size='large' onClick={props.registerOnClick}>
                    いますぐはじめる
                  </Button>
                </>
              ) : (
                // ログインユーザーなら表示
                <>
                  <Grid item xs={12}>
                    <Button size='large' onClick={props.boardOnClick}>
                      ボードリストへ
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
