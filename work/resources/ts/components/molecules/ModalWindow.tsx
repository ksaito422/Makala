import React, { useState, useContext } from 'react';
import { TextForm } from '../atoms/TextForm';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Grid,
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
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextForm
            multiline
            fullWidth
            rowsMax={1}
            defaultValue={'textだよ'}
          />
        </Grid>
        <Grid item xs={12}>
          <TextForm
            multiline
            fullWidth
            rows={8}
            defaultValue={'textだよ'}
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