import React, { useContext } from 'react';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Avatar as LetterAvatar,
  IconButton,
} from '@material-ui/core';

type Props = {
  ariaControls: string,
  ariaHaspopup: boolean,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const Avatar: React.FC<Props> = (props) => {
  // cssの定義
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();

  return (
    <>
      <IconButton
        size='small'
        aria-controls={props.ariaControls}
        aria-haspopup={props.ariaHaspopup}
        onClick={props.onClick}
      >
        <LetterAvatar className={classes.Avatar}>
          {props.children}
        </LetterAvatar>
      </IconButton>
    </>
  );
}