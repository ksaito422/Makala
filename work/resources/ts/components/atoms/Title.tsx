import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  href: string;
};

export const Title: React.FC = () => {
  /**
   * cssの定義
   * スマホ < iPad(764px以上)を基準にレスポンシブ対応
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 600px)');

  const ResponsiveSvg: React.FC<Props> = (props) => {
    return (
      <>
        {matches ? (
          // タブレット以上のレイアウト width >= 601px
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='203px'
            height='43px'
            viewBox='0 0 203 43'
            enableBackground='new 0 0 203 43'
          >
            <image id='image0' x='0' y='0' width='203px' height='43px' href={props.href} />
          </svg>
        ) : (
          // スマホ以下のレイアウト width <= 600px
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='100px'
            height='43px'
            viewBox='0 0 100 43'
            enableBackground='new 0 0 100 43'
          >
            <image id='image0' x='0' y='0' width='100px' height='43px' href={props.href} />
          </svg>
        )}
      </>
    );
  };

  return (
    <Link className={classes.Link} to='/'>
      <ResponsiveSvg
        href='data:image/png;base64,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'
      />
    </Link>
  );
};
