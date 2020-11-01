import React from 'react';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

type CloseIconProps = {
  onClick: (event: any) => void,
}

export const CloseIcon: React.FC<CloseIconProps> = ({
  onClick,
}) => {
  return (
    <IconButton
      component='span'
      onClick={onClick}
    >
      <Close />
    </IconButton>
  )
}