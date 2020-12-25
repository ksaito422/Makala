import React from 'react';
import { Fab } from '@material-ui/core';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';

type Props = {
  onClick: () => void;
};

export const DownloadIcon: React.FC<Props> = (props) => {
  return (
    <Fab color='primary' onClick={props.onClick}>
      <AssignmentReturnedIcon />
    </Fab>
  );
};
