import React, { useState, useContext } from 'react';
import { ButtonGroup } from '../../components/molecules/ButtonGroup';
import { Header } from '../organisms/Header';
import { DragBoardList } from '../organisms/DragBoardList';
import { Preview } from '../organisms/Preview';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import { BoardItemContext } from '../../contexts/childContexts/BoardItemContext';
import {
  Container,
  CssBaseline,
  Grid,
  useMediaQuery,
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

export const CardPage = React.memo (() => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  // iPad Pro(1024px) < PC(1025px以上)を基準にレスポンシブ対応
  const matches = useMediaQuery('(min-width: 1025px)');

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

  // width 1024px以下での表示レイアウト切り替え定義
  const [previewState, setPreviewState] = useState<{
    card: boolean,
    preview: boolean,
  }>({card: true, preview: false });

  return (
    <>
      <CssBaseline />
      <Header
        title={'makala'}
      />
      <Container maxWidth='xl' className={classes.main_container}>
        {matches ? (
          // PCレイアウト width >= 1025px
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
                <Preview
                  items={BoardItemState.items}
                />
              </Container>
            </Grid>
          </Grid>
        ) : (
          // タブレット・スマホレイアウト width <= 1024px
          <Container maxWidth='xl'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ButtonGroup
                  // アクティブならボタンを非表示にする
                  disabledCard={previewState.card && true}
                  disabledPreview={previewState.preview && true}
                  cardOnClick={() => {
                    setPreviewState({ ...previewState, card: true, preview: false})
                  }}
                  previewOnClick={() => {
                    setPreviewState({ ...previewState, card: false, preview: true})
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {/* cardOnClickでカード表示したら */}
                {previewState.card &&
                  <DragBoardList
                    items={BoardItemState.items}
                    onDragEnd={onDragEnd}
                  />
                }
                {/* previewOnClickでプレビュー表示したら */}
                {previewState.preview &&
                  <Preview
                    items={BoardItemState.items}
                  />
                }
              </Grid>
            </Grid>
          </Container>
        )}
      </Container>
    </>
  )
})
