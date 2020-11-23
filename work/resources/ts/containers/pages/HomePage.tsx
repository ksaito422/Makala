import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Boards } from '../organisms/Boards';
import { ApiBoardsContext } from '../../contexts/childContexts/ApiBoardsContext';
import { StoreBoardContext } from '../../contexts/childContexts/StoreBoardContext';
import { ShowCardsContext } from '../../contexts/childContexts/ShowCardsContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const HomePage: React.FC = () => {
  const { boardsState, getBoards, updateBoard, updateBoardState,  deleteBoard, deleteBoardState } = useContext<any>(ApiBoardsContext);
  const { storeBoard } = useContext<any>(StoreBoardContext);
  const { showCards, cardsState } = useContext<any>(ShowCardsContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const history = useHistory();

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
          storeOnClick={(data) => {
            storeBoard(data);
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
          showOnClick={() => {
            history.push('/home/cards');
          }}
        />
      </Container>
    </>
  )
}