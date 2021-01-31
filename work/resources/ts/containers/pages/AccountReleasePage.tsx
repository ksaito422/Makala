import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CssBaseline, Grid, useMediaQuery } from '@material-ui/core';
import { Spinner } from '../../components/molecules/Spinner';
import { Notice } from '../../components/molecules/Notice';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { SettingList } from '../organisms/SettingList';
import { Release } from '../organisms/Release';
import { AuthContext } from '../../contexts/childContexts/AuthContext';
import { ApiAccountContext } from '../../contexts/childContexts/ApiAccountContext';
import { FeedbackContext } from '../../contexts/childContexts/FeedbackContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const AccountReleasePage: React.FC = () => {
  /**
   * { スピナー, api通信の結果通知の状態管理 }
   * cssの定義
   * react-router-dom URLルーティングに使う
   * アカウント情報の読み込み
   * スマホ( > 600px)を基準にレスポンシブ対応
   */
  const { progress, status, setStatus } = useContext<any>(FeedbackContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();
  const { authUserState } = useContext<any>(AuthContext);
  const { accountRelease } = useContext<any>(ApiAccountContext);
  const matches = useMediaQuery('(min-width: 601px)');

  /**
   * Release componentを共通化
   */
  const CommonRelease = () => {
    return (
      <Release
        releaseOnClick={(data) => {
          accountRelease(authUserState.email, data, authUserState.id);
        }}
        cancelOnClick={() => {
          history.push(`/${authUserState.name}/settings/account`);
        }}
        // ゲストログインなら非表示にする
        disabled={authUserState.id === 1}
      />
    );
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='md' className={classes.main_container}>
        {matches ? (
          // PC・タブレットレイアウト width >= 601px
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <SettingList />
            </Grid>
            <Grid item xs={8}>
              <CommonRelease />
            </Grid>
          </Grid>
        ) : (
          // スマホレイアウト width <= 600px
          // <SettingList />を表示するハンバーガーメニューを実装したい
          <CommonRelease />
        )}
      </Container>
      <Footer />

      <Spinner open={progress} />
      <Notice
        open={status.open}
        type={status.type}
        message={status.message}
        onClose={() => {
          setStatus({ ...status, open: false });
        }}
      />
    </>
  );
};
