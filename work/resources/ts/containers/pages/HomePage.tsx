import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Boards } from '../organisms/Boards';
import { ApiBoardsContext } from '../../contexts/childContexts/ApiBoardsContext';
import { StoreBoardContext } from '../../contexts/childContexts/StoreBoardContext';
import { UpdateBoardContext } from '../../contexts/childContexts/UpdateBoardContext';
import { ShowCardsContext } from '../../contexts/childContexts/ShowCardsContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
} from '@material-ui/core';

export const HomePage: React.FC = () => {
  const { boardsState, setBoardsState, getBoards, deleteBoard, deleteBoardState } = useContext<any>(ApiBoardsContext);
  const { storeBoard } = useContext<any>(StoreBoardContext);
  const { updateBoard } = useContext<any>(UpdateBoardContext);
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
          // onClick={() => {
          //   // あとでポップアップメニューを表示する処理を書く
          //   console.log('hello');
          // }}
          // 新しいボードの作成メソッド
          storeOnClick={(data) => {
            storeBoard(data);
          }}
          // ボード名の更新メソッド
          postOnClick={(data) => {
            updateBoard(data.id, data);
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