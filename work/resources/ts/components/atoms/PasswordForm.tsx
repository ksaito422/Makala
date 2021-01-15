import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

type Props = {
  error: boolean;
  helperText: string;
  fullWidth?: boolean;
  label: string;
  name: string;
  inputRef: any;
};

export const PasswordForm: React.FC<Props> = (props) => {
  // パスワードの可視化を管理する
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <TextField
        color='secondary'
        variant='filled'
        rows={1}
        margin='normal'
        error={props.error}
        helperText={props.helperText}
        fullWidth={props.fullWidth}
        label={props.label}
        name={props.name}
        type={showPassword ? 'text' : 'password'}
        inputRef={props.inputRef}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
