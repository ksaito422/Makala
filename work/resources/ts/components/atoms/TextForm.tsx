import React from 'react';
import { TextField } from '@material-ui/core';

type Props = Partial<{
  error: boolean;
  helperText: string;
  multiline: boolean;
  fullWidth: boolean;
  rowsMax: number;
  rows: number;
  defaultValue: string;
  value: string;
  margin: 'none' | 'dense' | 'normal';
  label: string;
  name: string;
  type: string;
  autoComplete: string;
  required: boolean;
  autoFocus: boolean;
  inputRef: any;
  disabled: boolean;
}>;

export const TextForm: React.FC<Props> = (props) => {
  return (
    <TextField
      color='secondary'
      variant='filled'
      error={props.error}
      helperText={props.helperText}
      multiline={props.multiline}
      fullWidth={props.fullWidth}
      rowsMax={props.rowsMax}
      rows={props.rows}
      defaultValue={props.defaultValue}
      value={props.value}
      margin={props.margin}
      label={props.label}
      name={props.name}
      type={props.type}
      autoComplete={props.autoComplete}
      required={props.required}
      autoFocus={props.autoFocus}
      inputRef={props.inputRef}
      disabled={props.disabled}
    />
  );
};
