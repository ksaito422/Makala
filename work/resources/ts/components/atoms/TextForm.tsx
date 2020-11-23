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
  margin?: "none" | "dense" | "normal",
  label?: string,
  name?: string,
  type?: string,
  autoComplete?: string,
  required?: boolean,
  autoFocus?: boolean,
  disabled?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const TextForm: React.FC<Props> = (props) => {
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
      margin={props.margin}
      label={props.label}
      name={props.name}
      type={props.type}
      autoComplete={props.autoComplete}
      required={props.required}
      autoFocus={props.autoFocus}
      disabled={props.disabled}
      onChange={props.onChange}
    />
  );
}