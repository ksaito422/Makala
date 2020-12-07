import React, { useContext } from 'react';
import { Button } from '../../components/atoms/Button';
import { AccordionArea } from '../../components/molecules/AccordionArea';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

type Props = {
  registerOnClick: () => void,
  loginOnClick: () => void,
  boardOnClick: () => void,
}

export const Tutorial: React.FC<Props> = (props) => {
  /**
   * { 認証状態の確認 }
   * cssの定義
   */
  const { isAuth } = useContext<any>(AuthContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='lg'>
        <AccordionArea
          defaultExpanded={true}
        >
        <Grid
          container
          spacing={6}
        >
          <Grid item xs={7}>
            <Paper className={classes.gif}>
              <p>使い方説明のGIFが入ります</p>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Container maxWidth='xs'>
              <Grid
                container
                spacing={10}
                direction="column"
              >
                <Grid item xs={12}>
                  <Typography variant='h4'>Welcome to makala.</Typography>
                  <br />
                  <Typography variant='subtitle1'>
                    makalaは、文章構成を考案・構築するためのサービスです。<br />
                    いつ・どこにいても、ブログや記事の内容をささっと書き残すことができます。
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={4}
                    direction="column"
                    justify="flex-end"
                    alignItems="center"
                  >
                    {!isAuth ? (
                      <>
                        <Grid item xs={12}>
                        <Button
                          size='large'
                          onClick={props.registerOnClick}
                        >
                          新規登録する
                        </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            size='large'
                            onClick={props.loginOnClick}
                          >
                            ログインする
                          </Button>
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Grid item xs={12}>
                          <Button
                            size='large'
                            onClick={props.boardOnClick}
                          >
                            ボードリストへ
                          </Button>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        </AccordionArea>
      </Container>
    </>
  );
}