import React, { useState, useContext } from 'react';
import {
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { AddIcon } from '../../components/atoms/AddIcon';
import { CloseIcon } from '../../components/atoms/CloseIcon';
import { ModalWindow } from '../../components/molecules/ModalWindow';
import { ModalBoard } from '../../components/molecules/ModalBoard';
import { ModalPropsContext } from '../../contexts/childContexts/ModalPropsContext';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  boards: any;
  createOnClick: (data: { [x: string]: any }) => void;
  updateOnClick: (data: { [x: string]: any }, user: number) => void;
  deleteOnClick: (id: number, index: number) => void;
  showOnClick: (id: number) => void;
};

export const Boards: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * { モーダルに渡す表示内容, 表示のon/off切り替え }
   * 新規作成か更新か判別するstate
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const { modalValueState, setModalValueState, modalOpenState, setModalOpenState } = useContext<
    any
  >(ModalPropsContext);
  const [createState, setCreateState] = useState<boolean>(false);

  // モーダルを閉じるとき、入力値をクリア
  const modalClose = () => {
    setModalOpenState(false);
    setCreateState(false);
    setModalValueState({
      id: null,
      boardName: null,
      index: null,
    });
  };

  return (
    <>
      <Container maxWidth='sm'>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={2}>
              <List>
                {props.boards.map((board: { id: number; boardName: string }, index: number) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <IconButton
                        onClick={() => {
                          setModalOpenState(true);
                          setModalValueState({
                            ...modalValueState,
                            id: board.id,
                            boardName: board.boardName,
                            index,
                          });
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
                        props.showOnClick(board.id);
                      }}
                    >
                      <ListItemText primary={board.boardName} />
                    </Button>
                    <ListItemSecondaryAction>
                      <CloseIcon
                        onClick={() => {
                          props.deleteOnClick(board.id, index);
                        }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.centerPlacement}>
            <AddIcon
              onClick={() => {
                setModalOpenState(true);
                setCreateState(true);
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <ModalWindow modalOpen={modalOpenState} modalOnClose={modalClose}>
        <ModalBoard
          defaultValueTitle={modalValueState.board_name}
          postOnClick={(data) => {
            // 新規作成か更新を判断してメソッドを使い分ける
            // eslint-disable-next-line no-unused-expressions
            createState
              ? (modalClose(), props.createOnClick(data))
              : (modalClose(), props.updateOnClick(data, modalValueState.id));
          }}
          modalOnClose={modalClose}
        />
      </ModalWindow>
    </>
  );
};
