import React from 'react';
import { IconButton } from '@material-ui/core';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';

type Props = {
  onClick: () => void,
}

export const DownloadIcon: React.FC<Props> = (props: Props) => {
  return (
    <IconButton
      onClick={props.onClick}
    >
      <AssignmentReturnedIcon />
    </IconButton>
  )
}