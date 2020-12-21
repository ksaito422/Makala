import React from 'react';
import { Fab } from '@material-ui/core';
import { SystemUpdateAlt } from '@material-ui/icons';

export const SubmitIcon: React.FC = () => {
  return (
    <Fab color='primary' type='submit'>
      <SystemUpdateAlt />
    </Fab>
  );
}