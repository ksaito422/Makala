import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { Spinner } from '../../components/molecules/Spinner';
import { Notice } from '../../components/molecules/Notice';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { Boards } from '../organisms/Boards';
import { ApiBoardsContext } from '../../contexts/childContexts/ApiBoardsContext';
import { FeedbackContext } from '../../contexts/childContexts/FeedbackContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

export const HomePage: React.FC = () => {
  /**
   * { スピナー, api通信の結果通知の状態管理 }
   * cssの定義
   * Boards api import
   * react-router-dom URLルーティングに使う
   * ユーザー名をURLパラメータから取得
   */
  const { progress, status, setStatus } = useContext<any>(FeedbackContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const {
    boardsState,
    getBoards,
    createBoard,
    updateBoard,
    deleteBoard,
    deleteBoardState,
  } = useContext<any>(ApiBoardsContext);
  const history = useHistory();
  const { user } = useParams<any>();

  // 最初のレンダー時にボードを取得する
  useEffect(() => {
    getBoards();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Boards
          boards={boardsState}
          // 新しいボードの作成メソッド
          createOnClick={(data) => {
            const postData = {
              board_name: data.board_name,
            };
            createBoard(postData);
          }}
          // ボード名の更新メソッド
          updateOnClick={(data, id) => {
            const postData = {
              id,
              board_name: data,
            };
            updateBoard(postData);
          }}
          // ボードの削除メソッド ApiBoardsContextに定義したメソッドを利用
          deleteOnClick={(id, index) => {
            deleteBoard(id);
            deleteBoardState(index);
          }}
          // ボードと関連づいたカードを表示するメソッド
          showOnClick={(id) => {
            history.push(`/${user}/cards/${id}`);
          }}
        />
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
