import React, { useState, useContext } from 'react';
import { TextForm } from '../atoms/TextForm';
import { CloseIcon } from '../atoms/CloseIcon';
import { UpdateIcon } from '../atoms/UpdateIcon';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Grid,
  Modal,
} from '@material-ui/core';

type Props = {
  errorTitle?: boolean,
  helperTextTitle?: string,
  errorContent?: boolean,
  helperTextContent?: string,
  modalOpen: boolean,
  defaultValueTitle: string,
  defaultValueContent: string,
  disabled?: boolean,
  titleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  contentOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  postOnClick: () => void,
  modalOnClose: () => void,
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

export const ModalWindow: React.FC<Props> = (props) => {
  // cssの定義
  // モーダルの位置を指定したstate
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles()
  const [modalStyleState] = useState(getModalStyle);

  // モーダルに表示する内容の定義
  const modalBody = (
    <div style={modalStyleState} className={classes.modal}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.rightPlacement}>
          <CloseIcon
            onClick={props.modalOnClose}
          />
        </Grid>
        <Grid item xs={12}>
          <TextForm
            error={props.errorTitle}
            helperText={props.helperTextTitle}
            multiline
            fullWidth
            rowsMax={1}
            defaultValue={props.defaultValueTitle}
            onChange={props.titleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextForm
            error={props.errorContent}
            helperText={props.helperTextContent}
            multiline
            fullWidth
            rows={8}
            defaultValue={props.defaultValueContent}
            onChange={props.contentOnChange}
          />
        </Grid>
        <Grid item xs={12} className={classes.centerPlacement}>
          <UpdateIcon
            onClick={props.postOnClick}
            disabled={props.disabled}
          />
        </Grid>
      </Grid>
    </div>
  );

  return (
    <Modal
      open={props.modalOpen}
      onClose={props.modalOnClose}
    >
      {modalBody}
    </Modal>
  );
}