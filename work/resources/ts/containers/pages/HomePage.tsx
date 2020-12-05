import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Spinner } from '../../components/molecules/Spinner';
import { Notice } from '../../components/molecules/Notice';
import { Header } from '../organisms/Header';
import { Boards } from '../organisms/Boards';
import { ApiBoardsContext } from '../../contexts/childContexts/ApiBoardsContext';
import { FeedbackContext } from '../../contexts/childContexts/FeedbackContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const HomePage: React.FC = () => {
  const { boardsState, getBoards, createBoard, updateBoard, updateBoardState,  deleteBoard, deleteBoardState } = useContext<any>(ApiBoardsContext);
  const { progress, status, setStatus } = useContext<any>(FeedbackContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();
  const { user } = useParams<any>();

  // 最初のレンダー時にボードを取得する
  useEffect(() => {
    getBoards(user);
  }, []);

  return (
    <>
      <Spinner open={progress} />
      <Notice
        open={status.open}
        type={status.type}
        message={status.message}
        onClose={() => {
          setStatus({ ...status, open: false });
        }}
      />
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        <Boards
          boards={boardsState}
          // 新しいボードの作成メソッド
          storeOnClick={(data, user) => {
            const postData = {
              'user_id': user.id,
              'user_name': user.name,
              'board_name': data.board_name
            }
            createBoard(postData);
          }}
          // ボード名の更新メソッド
          postOnClick={(obj) => {
            updateBoard(obj);
            updateBoardState(obj);
          }}
          // ボードの削除メソッド ApiBoardsContextに定義したメソッドを利用
          deleteOnClick={(id, index) => {
            deleteBoard(id);
            deleteBoardState(index);
          }}
          // ボードと関連づいたカードを表示するメソッド
          showOnClick={(name) => {
            history.push(`/${user}/${name}/cards`);
          }}
        />
      </Container>
    </>
  )
}