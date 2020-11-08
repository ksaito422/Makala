import React from 'react';
import {
  Button as MuiButton
} from '@material-ui/core';

type Props = {
  disabled?: boolean,
  children: string,
  onClick: () => void,
}

export const Button: React.FC<Props> = (props: Props) => {
  return (
    <MuiButton
      variant='contained'
      color='secondary'
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </MuiButton>
  );
}