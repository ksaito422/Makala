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
  useMediaQuery,
} from '@material-ui/core';

type Props = {
  registerOnClick: () => void,
  loginOnClick: () => void,
  boardOnClick: () => void,
}

export const Top: React.FC<Props> = (props) => {
  /**
   * { 認証状態の確認 }
   * cssの定義
   * タブレット( > 1100px)を基準にレスポンシブ対応
   */
  const { isAuth } = useContext<any>(AuthContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 961px)');

  /**
   * 共通コンポーネント化
   * CommonGif GIFで説明動画をいれる
   */
  const CommonGif = () => {
    return (
      <>
        <Paper>
          <p>使い方説明のGIFが入ります</p>
        </Paper>
      </>
    );
  }
  /**
   * 共通コンポーネント化
   * CommonTutorial コンセプト
   */
  const CommonTutorial = () => {
    return (
      <>
        <Typography variant='h4'>Welcome to makala.</Typography>
        <br />
        <Typography variant='subtitle1'>
          makalaは、文章構成を考案・構築するためのサービスです。<br />
          いつ・どこにいても、ブログや記事の内容をささっと書き残すことができます。
        </Typography>
      </>
    );
  }

  return (
    <>
      <Container maxWidth='md'>
        <AccordionArea defaultExpanded={true}>
          {matches ? (
            // PCレイアウト width >= 1101px
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Container maxWidth='md'>
                  <Grid container spacing={10}>
                    <Grid item xs={8}>
                      <CommonTutorial />
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container spacing={4} direction="column"
                            justify="flex-end" alignItems="center"
                      >
                        {!isAuth ? (
                          // ゲストユーザーなら表示
                          <>
                            <Grid item xs={12}>
                              <Button size='large' onClick={props.registerOnClick}>
                                新規登録する
                              </Button>
                            </Grid>
                            <Grid item xs={12}>
                              <Button size='large' onClick={props.loginOnClick}>
                                ログインする
                              </Button>
                            </Grid>
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
                  </Grid>
                </Container>
              </Grid>
              <Container maxWidth='sm'>
                <Grid item xs={12}>
                  <CommonGif />
                </Grid>
              </Container>
            </Grid>
          ) : (
            // タブレット・スマホレイアウト width <= 1100px
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Container maxWidth='xs'>
                  <Grid container spacing={10}>
                    <Grid item xs={12}>
                      <CommonTutorial />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={4} direction="column"
                            justify="flex-end" alignItems="center"
                      >
                        {!isAuth ? (
                          // ゲストユーザーなら表示
                          <>
                            <Grid item xs={12}>
                              <Button size='large' onClick={props.registerOnClick}>
                                新規登録する
                              </Button>
                            </Grid>
                            <Grid item xs={12}>
                              <Button size='large' onClick={props.loginOnClick}>
                                ログインする
                              </Button>
                            </Grid>
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
                  </Grid>
                </Container>
              </Grid>
              <Container maxWidth='xs'>
                <Grid item xs={12}>
                  <CommonGif />
                </Grid>
              </Container>
            </Grid>
          )}
        </AccordionArea>
      </Container>
    </>
  );
}