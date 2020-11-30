import React, { useState, useContext } from 'react';
import { AddIcon } from '../../components/atoms/AddIcon';
import { CloseIcon } from '../../components/atoms/CloseIcon';
import { ModalWindow } from '../../components/molecules/ModalWindow';
import { ModalBoard } from '../../components/molecules/ModalBoard';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
 } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

type Props = {
  boards: any,
  storeOnClick: (data: any) => void,
  postOnClick: (data: any) => void,
  deleteOnClick: (id: number, index: number) => void,
  showOnClick: (data: number) => void,
}

export const Boards: React.FC<Props> = (props) => {
  // cssの定義
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  // 新規作成か更新か判別するstate
  const [createState, setCreateState] = useState<boolean>(false);

  // モーダルに渡す表示内容
  const [modalValueState, setmodalValueState] = useState<any>({
    id: null,
    board_name: null,
    index: null
  });
  // モーダル表示のon/off切り替え
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);
  // モーダルを閉じるとき、入力値をクリア
  const modalClose = () => {
    setModalOpenState(false);
    setCreateState(false);
    setmodalValueState({
      // とりあえずuser_id 1で固定
      user_id: 1,
      id: null,
      board_name: null,
      index: null
    });
  };

  return (
    <>
      <Container maxWidth='sm'>
        <Paper elevation={3}>
          <List>
            {props.boards.map((
              board: {
                id: number,
                board_name: string,
              },
              index: number
              ) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <IconButton
                    onClick={() => {
                      setModalOpenState(true);
                      setmodalValueState({
                        ...modalValueState,
                        id: board.id,
                        board_name: board.board_name,
                        index: index
                      })
                    }}
                  >
                    <CreateIcon />
                  </IconButton>
                </ListItemIcon>
                <Button
                  classes={{
                    label: classes.label,
                  }}
                  fullWidth
                  onClick={() => {
                    props.showOnClick(board.id)
                  }}
                >
                  <ListItemText
                    primary={board.board_name}
                  />
                </Button>
                <ListItemSecondaryAction>
                  <CloseIcon
                    onClick={() => {
                      modalClose(),
                      props.deleteOnClick(board.id, index)
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              ))}
          </List>
        </Paper>
        <div className={classes.centerPlacement}>
          <AddIcon
            onClick={() => {
              setModalOpenState(true);
              setCreateState(true);
            }}
          />
        </div>
      </Container>
      <ModalWindow
        modalOpen={modalOpenState}
        modalOnClose={modalClose}
      >
        <ModalBoard
          defaultValueTitle={modalValueState.board_name}
          titleOnChange={(e) => {
            setmodalValueState({ ...modalValueState, board_name: e.target.value })
          }}
          postOnClick={() => {
            // 新規作成か更新を判断してメソッドを使い分ける
            createState ? (
                modalClose(),
                props.storeOnClick(modalValueState)
              ) : (
                modalClose(),
                props.postOnClick(modalValueState)
              );
          }}
          modalOnClose={modalClose}
        />
      </ModalWindow>
    </>
  );
}