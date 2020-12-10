import React, { useContext } from 'react';
import { StylesContext } from '../../contexts/childContexts/StylesContext';
import {
  Avatar as LetterAvatar,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';

type Props = {
  ariaControls: string,
  ariaHaspopup: boolean,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const Avatar: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * スマホ < iPad(764px以上)を基準にレスポンシブ対応
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 600px)');

  const ResponsiveAvatar: React.FC = (props) => {
    return (
      <>
        {matches ? (
          // タブレット以上のレイアウト width >= 601px
          <LetterAvatar className={classes.avatar}>
            {props.children}
          </LetterAvatar>
        ) : (
          // スマホ以下のレイアウト width <= 600px
          <LetterAvatar className={[ classes.avatar, classes.avatar_small ].join(' ')}>
            {props.children}
          </LetterAvatar>
        )}
      </>
    );
  }

  return (
    <>
      <IconButton
        aria-controls={props.ariaControls}
        aria-haspopup={props.ariaHaspopup}
        onClick={props.onClick}
      >
        <ResponsiveAvatar>
          {props.children}
        </ResponsiveAvatar>
      </IconButton>
    </>
  );
}