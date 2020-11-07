import React from 'react';
import { IconButton } from '@material-ui/core';
import { SystemUpdateAlt } from '@material-ui/icons';

type Props = {
  onClick: (event: any) => void,
  disabled?: boolean,
}

export const UpdateIcon: React.FC<Props> = (props: Props) => {
  return (
    <IconButton
      component='span'
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <SystemUpdateAlt />
    </IconButton>
  )
}