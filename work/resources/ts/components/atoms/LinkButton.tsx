import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button
} from '@material-ui/core';

type Props = {
  to: string,
  children: string,
  fullWidth?: boolean,
}

export const LinkButton: React.FC<Props> = (props: Props) => {
  return (
    <Link to={props.to}>
      <Button
        variant='contained'
        color='secondary'
        fullWidth={props.fullWidth}
      >
        {props.children}
      </Button>
    </Link>
  );
}