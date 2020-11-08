import React from 'react';
import { TextField } from '@material-ui/core';

type Props = {
  error?: boolean,
  helperText?: string,
  multiline?: boolean,
  fullWidth?: boolean,
  rowsMax?: number,
  rows?: number,
  defaultValue?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const TextForm: React.FC<Props> = (props: Props) => {
  return (
    <TextField
      error={props.error}
      helperText={props.helperText}
      multiline={props.multiline}
      fullWidth={props.fullWidth}
      rowsMax={props.rowsMax}
      rows={props.rows}
      defaultValue={props.defaultValue}
      variant='filled'
      onChange={props.onChange}
    />
  )
}