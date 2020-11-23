import React from 'react';
import {
  Button as MuiButton
} from '@material-ui/core';

type Props = {
  disabled?: boolean,
  fullWidth?: boolean,
  onClick: () => void,
}

export const Button: React.FC<Props> = (props) => {
  return (
    <MuiButton
      variant='contained'
      color='secondary'
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      onClick={props.onClick}
    >
      {props.children}
    </MuiButton>
  );
}