import React, { useState } from 'react';
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
                      props.deleteOnClick(board.id, index)
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              ))}
          </List>
        </Paper>
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
              props.postOnClick(modalValueState)
            }}
            modalOnClose={modalClose}
          />
        </ModalWindow>
        <AddIcon
          onClick={() => {
            setModalOpenState(true);
          }}
        />
      </Container>
    </>
  );
}