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
  createOnClick: (data: { [x: string]: any }, user: number) => void;
  updateOnClick: (data: { [x: string]: any }, user: number) => void;
  deleteOnClick: (id: number, index: number) => void;
  showOnClick: (data: string) => void;
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
      board_name: null,
      index: null,
    });
  };

  return (
    <>
      <Container maxWidth='sm'>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <List>
                {props.boards.map((board: { id: number; board_name: string }, index: number) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <IconButton
                        onClick={() => {
                          setModalOpenState(true);
                          setModalValueState({
                            ...modalValueState,
                            id: board.id,
                            board_name: board.board_name,
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
                        props.showOnClick(board.board_name);
                      }}
                    >
                      <ListItemText primary={board.board_name} />
                    </Button>
                    <ListItemSecondaryAction>
                      <CloseIcon
                        onClick={() => {
                          modalClose(), props.deleteOnClick(board.id, index);
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
          postOnClick={(data, user_id) => {
            // 新規作成か更新を判断してメソッドを使い分ける
            createState
              ? (modalClose(), props.createOnClick(data, user_id))
              : (modalClose(), props.updateOnClick(data, modalValueState.id));
          }}
          modalOnClose={modalClose}
        />
      </ModalWindow>
    </>
  );
};
