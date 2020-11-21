import React, { useContext, useEffect } from 'react';
import { Header } from '../organisms/Header';
import { Boards } from '../organisms/Boards';
import { GetBoardsContext } from '../../contexts/childContexts/GetBoardsContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
  // useMediaQuery,
} from '@material-ui/core';

export const HomePage: React.FC = () => {
  const { boardsState, getBoards } = useContext<any>(GetBoardsContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  // 作成したボードを取得するロジック
  useEffect(() => {
    getBoards();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header
        title='makala'
      />
      <Container maxWidth='xl' className={classes.main_container}>
        <Boards
          boards={boardsState}
          onClick={() => {
            // あとでポップアップメニューを表示する処理を書く
            console.log('hello');
          }}
        />
      </Container>
    </>
  )
}