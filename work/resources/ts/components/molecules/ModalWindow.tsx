import React from 'react';
import { TextField } from '../atoms/TextField';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Modal,
} from '@material-ui/core';

type ModalProps = {
  onClose: (event: any) => void,
  modalOpen: boolean,
}

export const ModalWindow: React.FC<ModalProps> = ({
  onClose,
  modalOpen,
}) => {
  // モーダルの中身
  const modalBody = (
    <div>
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