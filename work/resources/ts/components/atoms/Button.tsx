import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

type Props = {
  className?: any;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'large' | 'medium' | 'small';
  onClick?: () => void;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <MuiButton
      className={props.className}
      variant={props.variant}
      color={props.color}
      type={props.type}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      size={props.size}
      onClick={props.onClick}
    >
      {props.children}
    </MuiButton>
  );
};

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
  type: 'button',
};
