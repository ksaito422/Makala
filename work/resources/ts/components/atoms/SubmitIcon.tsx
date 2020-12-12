import React from 'react';
import { Fab } from '@material-ui/core';
import { SystemUpdateAlt } from '@material-ui/icons';

type Props = {
  type: 'submit' | 'reset' | 'button',
}

export const SubmitIcon: React.FC<Props> = (props) => {
  return (
    <Fab color='primary' type={props.type}>
      <SystemUpdateAlt />
    </Fab>
  );
}