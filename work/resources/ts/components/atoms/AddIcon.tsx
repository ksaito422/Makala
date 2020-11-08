import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

type Props = {
  onClick: () => void,
}

export const AddIcon: React.FC<Props> = (props: Props) => {
  return (
    <IconButton
      onClick={props.onClick}
    >
      <AddCircle color='secondary' />
    </IconButton>
  );
}