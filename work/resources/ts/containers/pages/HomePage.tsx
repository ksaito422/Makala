import React, { useState, useContext } from 'react';
import { Header } from '../organisms/Header';
import { DragBoardList } from '../organisms/DragBoardList';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
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

  // dragitemのデータ
  const initial: ItemType[] = Array.from({ length: 5 }, (v, k) => k).map(k => {
    return {
      id: `${k}`,
      title: `id-${k}`,
      content: `Item ${k}`
    }
  })
  const [state, setState] = useState({ items: initial });

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(
      state.items,
      result.source.index,
      result.destination.index
    );

    setState({ items });
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
                items={state.items}
                onDragEnd={onDragEnd}
              />
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container maxWidth='xl'>
              <p>プレビュー画面が入ります</p>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  )
})
