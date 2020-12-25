import React from 'react';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

type Props = {
  onClick: () => void;
};

export const AddIcon: React.FC<Props> = (props) => {
  return (
    <Fab color='primary' aria-label='add' onClick={props.onClick}>
      <Add />
    </Fab>
  );
};
