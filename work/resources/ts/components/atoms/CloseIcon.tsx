import React from 'react';
import { IconButton } from '@material-ui/core';
import { Close  } from '@material-ui/icons';

export const CloseIcon = () => {
  return (
    <IconButton component='span'>
      <Close  />
    </IconButton>
  )
}