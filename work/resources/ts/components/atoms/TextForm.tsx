import React from 'react';
import { TextField } from '@material-ui/core';

type TextFormProps = {
  multiline?: boolean,
  fullWidth?: boolean,
  rowsMax?: number,
  rows?: number,
  defaultValue?: string,
}

export const TextForm: React.FC<TextFormProps> = ({
  multiline,
  fullWidth,
  rowsMax,
  rows,
  defaultValue,
}) => {
  return (
    <TextField
      multiline={multiline}
      fullWidth={fullWidth}
      rowsMax={rowsMax}
      rows={rows}
      defaultValue={defaultValue}
      variant='filled'
    />
  )
}