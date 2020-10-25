import React from 'react';
import { Typography } from '@material-ui/core';

type Props = {
  title: string;
}

export const Title: React.FC<Props> = (props) => {
  return (
      <Typography
        color={'inherit'}
        component={'h1'}
        variant={'h3'}
      >
        {props.title}
      </Typography>
  )
}
