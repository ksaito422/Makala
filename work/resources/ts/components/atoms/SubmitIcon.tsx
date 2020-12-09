import React from 'react';
import { IconButton } from '@material-ui/core';
import { SystemUpdateAlt } from '@material-ui/icons';

type Props = {
  type: 'submit' | 'reset' | 'button',
}

export const SubmitIcon: React.FC<Props> = (props) => {
  return (
    <IconButton
      type={props.type}
    >
      <SystemUpdateAlt />
    </IconButton>
  );
}