import React from 'react';
import { Typography } from '@material-ui/core';

type TextFieldProps = {
  variant: any,
  component: any,
}

export const TextField: React.FC<TextFieldProps> = ({
  variant,
  component,
  children
}) => {
  return (
    <Typography
      color='textPrimary'
      variant={variant}
      component={component}
    >
      {children}
    </Typography>
  )
}