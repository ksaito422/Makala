import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

type AddIconProps = {
  onClickAdd: (event:any) => void,
}

export const AddIcon: React.FC<AddIconProps> = ({
  onClickAdd,
}) => {
  return (
    <IconButton
      onClick={onClickAdd}
    >
      <AddCircle color='secondary' />
    </IconButton>
  );
}