import React from 'react';
import { TextField } from '@material-ui/core';

type TextFormProps = {
  error?: boolean,
  helperText?: string,
  multiline?: boolean,
  fullWidth?: boolean,
  rowsMax?: number,
  rows?: number,
  defaultValue?: string,
  onChange: (event: any) => void,
}

export const TextForm: React.FC<TextFormProps> = ({
  error,
  helperText,
  multiline,
  fullWidth,
  rowsMax,
  rows,
  defaultValue,
  onChange
}) => {
  return (
    <TextField
      error={error}
      helperText={helperText}
      multiline={multiline}
      fullWidth={fullWidth}
      rowsMax={rowsMax}
      rows={rows}
      defaultValue={defaultValue}
      variant='filled'
      onChange={onChange}
    />
  )
}