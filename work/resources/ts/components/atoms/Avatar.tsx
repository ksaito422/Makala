import React, { useContext } from 'react';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Avatar as LetterAvatar,
  IconButton,
} from '@material-ui/core';

type Props = {
  onClick: () => void,
}

export const Avatar: React.FC<Props> = (props) => {
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <IconButton onClick={props.onClick}>
        <LetterAvatar className={classes.Avatar}>
          {props.children}
        </LetterAvatar>
      </IconButton>
    </>
  );
}