import React from 'react';
import { IconButton } from '@material-ui/core';
import { SystemUpdateAlt } from '@material-ui/icons';

type UpdateIconProps = {
  onClick: (event: any) => void,
}

export const UpdateIcon: React.FC<UpdateIconProps> = ({
  onClick,
}) => {
  return (
    <IconButton
      component='span'
      onClick={onClick}
    >
      <SystemUpdateAlt />
    </IconButton>
  )
}