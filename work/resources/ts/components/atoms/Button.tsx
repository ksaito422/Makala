import React from 'react';
import {
  Button as MuiButton
} from '@material-ui/core';

type Props = {
  disabled?: boolean,
  fullWidth?: boolean,
  size?: 'large' | 'medium' | 'small'
  type?: 'button' | 'submit' | 'reset',
  onClick?: () => void,
}

export const Button: React.FC<Props> = (props) => {
  return (
    <MuiButton
      variant='contained'
      color='primary'
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      onClick={props.onClick}
      size={props.size}
      type={props.type}
    >
      {props.children}
    </MuiButton>
  );
}