import React, { useState, useContext } from 'react';
import { TextField } from '../atoms/TextField';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Modal,
} from '@material-ui/core';

type ModalProps = {
  onClose: (event: any) => void,
  modalOpen: boolean,
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
}) => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle);

  // モーダルの中身
  const modalBody = (
    <div style={modalStyle} className={classes.modal}>
      <TextField
        variant='subtitle1'
        component='h3'
      >
        aaa
      </TextField>
      <TextField
        variant='body1'
        component='p'
      >
        aaa
      </TextField>
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