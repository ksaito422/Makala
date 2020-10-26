import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

export const AddIcon = () => {
  return (
    <IconButton component='span'>
      <AddCircle color='secondary' />
    </IconButton>
  )
}