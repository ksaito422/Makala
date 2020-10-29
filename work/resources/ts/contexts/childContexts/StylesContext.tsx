import React, { createContext } from 'react';
import { makeStyles } from '@material-ui/core';

export const StylesContext = createContext({});

// ページ全体で使うclassNameの定義
export const StylesContextProvider: React.FC = props => {
  const useStyles: any = makeStyles((theme) => ({
    // pagesで使用 メインコンテンツとヘッダーの間隔をとるため
    main_container: {
      marginTop: theme.spacing(4),
    },
    // Draggable内の要素の間隔をとるため
    drag_card: {
      marginBottom: theme.spacing(2),
    },
    // modalの表示サイズ
    modal: {
      position: 'absolute',
      width: `60%`,
      height: `60%`,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }
  }));

  return (
    <StylesContext.Provider value={{useStyles}}>
      {props.children}
    </StylesContext.Provider>
  )
}