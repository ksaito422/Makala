import React, { useContext } from 'react';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Backdrop,
  CircularProgress,
} from '@material-ui/core';

type Props = {
  open: boolean,
}

export const Spinner: React.FC<Props> = (props) => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <Backdrop open={props.open} className={classes.Spinner}>
        <CircularProgress color='primary' />
      </Backdrop>
    </>
  );
}