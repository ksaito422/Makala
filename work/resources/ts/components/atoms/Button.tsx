import React, { ReactNode } from 'react';
import {
  Button as MuiButton
} from '@material-ui/core';

type Props = {
  color: any,
  onClick: () => void,
  children: string,
}

export const Button: React.FC<Props> = (props: Props) => {
  return (
    <MuiButton
      variant='contained'
      color={props.color}
      onClick={props.onClick}
    >
      {props.children}
    </MuiButton>
  )
}