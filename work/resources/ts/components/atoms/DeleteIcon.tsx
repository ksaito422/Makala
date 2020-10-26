import React from 'react';
import { IconButton } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';

export const DeleteIcon = () => {
  return (
    <IconButton component='span'>
      <DeleteForever />
    </IconButton>
  )
}