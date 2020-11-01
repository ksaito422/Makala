import React, { useState, useContext } from 'react';
import { TextForm } from '../atoms/TextForm';
import { CloseIcon } from '../atoms/CloseIcon';
import { UpdateIcon } from '../atoms/UpdateIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import { BoardItemContext } from '../../contexts/childContexts/BoardItemContext';
import {
  Grid,
  Modal,
} from '@material-ui/core';

type ModalProps = {
  onClose: (event: any) => void,
  modalOpen: boolean,
  defaultValueTitle: string,
  defaultValueContent: string,
}

// モーダルの表示位置を決める
function getModalStyle() {
  // 0~100%の間で真ん中を指定
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const ModalWindow: React.FC<ModalProps> = ({
  onClose,
  modalOpen,
  defaultValueTitle,
  defaultValueContent,
}) => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle);

  const { BoardItemState, setBoardItemState } = useContext<any>(BoardItemContext);

  // モーダルの中身
  const modalBody = (
    <div style={modalStyle} className={classes.modal}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.iconRight}>
          <CloseIcon
            onClick={onClose}
          />
        </Grid>
        <Grid item xs={12}>
          <TextForm
            multiline
            fullWidth
            rowsMax={1}
            defaultValue={defaultValueTitle}
            onChange={(e) => {
              setBoardItemState(BoardItemState.items[0].title, e.target.value )
              console.log(BoardItemState.items[0].title)
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextForm
            multiline
            fullWidth
            rows={8}
            defaultValue={defaultValueContent}
            onChange={(e) => {
              setBoardItemState({ ...BoardItemState, content: e.target.value })
            }}
          />
        </Grid>
        <Grid item xs={12} className={classes.iconCenter}>
          <UpdateIcon
            onClick={onClose}
          />
        </Grid>
      </Grid>
    </div>
  )

  return (
    <Modal
      open={modalOpen}
      onClose={onClose}
    >
      {modalBody}
    </Modal>
  )
}