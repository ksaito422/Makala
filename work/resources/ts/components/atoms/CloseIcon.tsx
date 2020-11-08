import React from 'react';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

type Props = {
  onClick: () => void,
}

export const CloseIcon: React.FC<Props> = (props: Props) => {
  return (
    <IconButton
      onClick={props.onClick}
    >
      <Close />
    </IconButton>
  );
}