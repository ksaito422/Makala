import React, { useContext, useEffect } from 'react';
import { Header } from '../organisms/Header';
import { Boards } from '../organisms/Boards';
import { GetBoardsContext } from '../../contexts/childContexts/GetBoardsContext';
import { StoreBoardContext } from '../../contexts/childContexts/StoreBoardContext';
import { UpdateBoardContext } from '../../contexts/childContexts/UpdateBoardContext';
import { DeleteBoardContext } from '../../contexts/childContexts/DeleteBoardContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
  // useMediaQuery,
} from '@material-ui/core';

export const HomePage: React.FC = () => {
  const { boardsState, getBoards } = useContext<any>(GetBoardsContext);
  const { storeBoard } = useContext<any>(StoreBoardContext);
  const { updateBoard } = useContext<any>(UpdateBoardContext);
  const { deleteBoard } = useContext<any>(DeleteBoardContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  // 作成したボードを取得するロジック
  // 更新・削除のたびにgetBoards()を発動
  useEffect(() => {
    getBoards();
  }, [boardsState]);

  return (
    <>
      <CssBaseline />
      <Header
        title='makala'
      />
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
          // ボードの削除メソッド
          deleteOnClick={(id) => {
            deleteBoard(id);
          }}
        />
      </Container>
    </>
  )
}