import React, { ReactNode } from 'react';
import {
  Button as MuiButton
} from '@material-ui/core';

type Props = {
  color: any,
  disabled?: boolean,
  onClick: () => void,
  children: string,
}

export const Button: React.FC<Props> = (props: Props) => {
  return (
    <MuiButton
      variant='contained'
      color={props.color}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </MuiButton>
  )
}