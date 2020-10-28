import React, { useState, useContext } from 'react';
import { Header } from '../organisms/Header';
import { DragBoardList } from '../organisms/DragBoardList';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Container,
  CssBaseline,
  Grid,
} from '@material-ui/core';

export const HomePage: React.FC = () => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  // モーダル表示のon/off切り替え
  const [modalopen, setModalOpen] = useState<boolean>(false);
  const modalOpen = () => {
    setModalOpen(true);
  };
  const modalClose = () => {
    setModalOpen(false);
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
                onClick={() => {
                  modalOpen();
                }}
                onClose={() => {
                  modalClose();
                }}
                modalOpen={modalopen}
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
}
