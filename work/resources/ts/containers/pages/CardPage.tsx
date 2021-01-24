import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, CssBaseline, Grid, useMediaQuery } from '@material-ui/core';
import { ButtonGroup } from '../../components/molecules/ButtonGroup';
import { Spinner } from '../../components/molecules/Spinner';
import { Notice } from '../../components/molecules/Notice';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { Cards } from '../organisms/Cards';
import { Preview } from '../organisms/Preview';
import { NotFound } from '../organisms/NotFound';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import { ApiCardsContext } from '../../contexts/childContexts/ApiCardsContext';
import { FeedbackContext } from '../../contexts/childContexts/FeedbackContext';
import { NotFoundContext } from '../../contexts/childContexts/NotFoundContext';

type ItemType = {
  id: string;
  content: string;
};

const reorder = (list: ItemType[], startIndex: number, endIndex: number): ItemType[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const CardPage = React.memo(() => {
  /**
   * { スピナー, api通信の結果通知の状態管理 }
   * cssの定義
   * Cards api import
   * iPad Pro(1024px) < PC(1025px以上)を基準にレスポンシブ対応
   * ボード名をURLパラメータから取得
   */
  const { progress, status, setStatus } = useContext<any>(FeedbackContext);
  const { notFound } = useContext<any>(NotFoundContext);
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { cardsState, getCards, setCardsState, createCard, updateCard, deleteCard } = useContext<
    any
  >(ApiCardsContext);
  const matches = useMediaQuery('(min-width: 1025px)');
  const { card } = useParams<any>();

  // 最初のレンダー時にボードと関連のあるカードを取得する
  useEffect(() => {
    getCards(card);
  }, []);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(cardsState, result.source.index, result.destination.index);

    setCardsState(items);
  };

  // width 1024px以下での表示レイアウト切り替え定義
  const [previewState, setPreviewState] = useState<{
    card: boolean;
    preview: boolean;
  }>({ card: true, preview: false });

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' className={classes.main_container}>
        {/* eslint-disable */}
        {/* notFoundStateがtrueならNotFoundPageを表示する */}
        {notFound ? (
          <NotFound />
        ) : matches ? (
          // PCレイアウト width >= 1025px
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Container maxWidth='xl'>
                <Cards
                  items={cardsState}
                  onDragEnd={onDragEnd}
                  deleteOnClick={(id) => {
                    deleteCard(id, card);
                  }}
                  createOnSubmit={(value) => {
                    const postData = {
                      boardId: card,
                      cardContent: value,
                    };
                    createCard(card, postData);
                  }}
                  updateOnSubmit={(value, id) => {
                    const postData = {
                      cardContent: value,
                    };
                    updateCard(id, card, postData);
                  }}
                />
              </Container>
            </Grid>
            <Grid item xs={6}>
              <Container maxWidth='xl'>
                <Preview items={cardsState} />
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
                    setPreviewState({ ...previewState, card: true, preview: false });
                  }}
                  previewOnClick={() => {
                    setPreviewState({ ...previewState, card: false, preview: true });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {/* cardOnClickでカード表示したら */}
                {previewState.card && (
                  <Cards
                    items={cardsState}
                    onDragEnd={onDragEnd}
                    deleteOnClick={(id) => {
                      deleteCard(id);
                    }}
                    createOnSubmit={(value) => {
                      const postData = {
                        boardId: card,
                        cardContent: value,
                      };
                      createCard(card, postData);
                    }}
                    updateOnSubmit={(value, id) => {
                      const postData = {
                        cardContent: value,
                      };
                      updateCard(id, card, postData);
                    }}
                  />
                )}
                {/* previewOnClickでプレビュー表示したら */}
                {previewState.preview && <Preview items={cardsState} />}
              </Grid>
            </Grid>
          </Container>
        )}
        {/* eslint-disable */}
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
});
