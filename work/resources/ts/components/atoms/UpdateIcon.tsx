import React from 'react';
import { IconButton } from '@material-ui/core';
import { SystemUpdateAlt } from '@material-ui/icons';

type UpdateIconProps = {
  onClick: (event: any) => void,
  disabled?: boolean,
}

export const UpdateIcon: React.FC<UpdateIconProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <IconButton
      component='span'
      onClick={onClick}
      disabled={disabled}
    >
      <SystemUpdateAlt />
    </IconButton>
  )
}