import React, { useState, useContext } from 'react';
import { TextForm } from '../atoms/TextForm';
import { CloseIcon } from '../atoms/CloseIcon';
import { UpdateIcon } from '../atoms/UpdateIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Grid,
  Modal,
} from '@material-ui/core';

type ModalProps = {
  errorTitle?: boolean,
  helperTextTitle?: string,
  errorContent?: boolean,
  helperTextContent?: string,
  onClose: (event: any) => void,
  modalOpen: boolean,
  defaultValueTitle: string,
  defaultValueContent: string,
  onChangeTitle: (event: any) => void,
  onChangeContent: (event: any) => void,
  onClick: (event: any) => void,
  disabled?: boolean,
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
  errorTitle,
  helperTextTitle,
  errorContent,
  helperTextContent,
  onClose,
  modalOpen,
  defaultValueTitle,
  defaultValueContent,
  onChangeTitle,
  onChangeContent,
  onClick,
  disabled,
}) => {
  // classNameのインポート
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle);

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
            error={errorTitle}
            helperText={helperTextTitle}
            multiline
            fullWidth
            rowsMax={1}
            defaultValue={defaultValueTitle}
            onChange={onChangeTitle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextForm
            error={errorContent}
            helperText={helperTextContent}
            multiline
            fullWidth
            rows={8}
            defaultValue={defaultValueContent}
            onChange={onChangeContent}
          />
        </Grid>
        <Grid item xs={12} className={classes.iconCenter}>
          <UpdateIcon
            onClick={onClick}
            disabled={disabled}
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