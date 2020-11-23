import React from 'react';
import { IconButton } from '@material-ui/core';
import { SystemUpdateAlt } from '@material-ui/icons';

type Props = {
  disabled?: boolean,
  onClick: () => void,
}

export const UpdateIcon: React.FC<Props> = (props) => {
  return (
    <IconButton
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <SystemUpdateAlt />
    </IconButton>
  );
}