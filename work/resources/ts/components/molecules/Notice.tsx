import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

type Props = {
  open: boolean,
  type: 'success' | 'error' | 'info' | 'warning',
  message: string | null,
  onClose: () => void,
}

export const Notice: React.FC<Props> = (props) => {
  return (
    <>
      <Snackbar open={props.open} onClose={props.onClose} autoHideDuration={3000}>
        <Alert severity={props.type}>
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
}