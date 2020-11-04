import React, { useState, useContext } from 'react';
import { Header } from '../organisms/Header';
import { DragBoardList } from '../organisms/DragBoardList';
import { Demo } from '../organisms/MarkdownPreview';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import { BoardItemContext } from '../../contexts/childContexts/BoardItemContext';
import {
  Container,
  CssBaseline,
  Grid,
} from '@material-ui/core';

type ItemType = {
  id: string;
  content: string;
}

const reorder = (
  list: ItemType[],
  startIndex: number,
  endIndex: number
): ItemType[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const HomePage = React.memo (() => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  // dragItemのデータ 表示する内容のstateをBoardItemContextから読み取る
  const { BoardItemState, setBoardItemState } = useContext<any>(BoardItemContext);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(
      BoardItemState.items,
      result.source.index,
      result.destination.index
    );

    setBoardItemState({ items });
  };

  return (
    <>
      <CssBaseline />
      <Header
        title={'makala'}
      />
      <Container maxWidth='xl' className={classes.main_container}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Container maxWidth='xl'>
              <DragBoardList
                items={BoardItemState.items}
                onDragEnd={onDragEnd}
              />
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container maxWidth='xl'>
              <Demo />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  )
})
