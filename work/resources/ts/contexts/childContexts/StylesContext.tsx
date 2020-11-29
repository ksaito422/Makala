import React, { createContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { NoEncryption } from '@material-ui/icons';

export const StylesContext = createContext({});

// ページ全体で使うclassNameの定義
export const StylesContextProvider: React.FC = props => {
  const useStyles: any = makeStyles((theme) => ({
    // pagesで使用 メインコンテンツとヘッダーの間隔をとるため
    main_container: {
      marginTop: theme.spacing(4),
    },
    // dragBoradの高さとスクロール可否
    drop_able: {
      maxHeight: `80vh`,
      overflowY: 'scroll',
    },
    // Draggable内の要素の間隔をとるため
    drag_card: {
      marginBottom: theme.spacing(2),
    },
    // modalの表示サイズ
    modal: {
      position: 'absolute',
      width: `60%`,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    // アイコンを中央に
    centerPlacement: {
      textAlign: 'center'
    },
    // アイコンを右に
    rightPlacement: {
      textAlign: 'right'
    },
    // MarkdownPreview Paperのスタイル
    preview: {
      height: `80vh`,
      maxHeight: `80vh`,
      overflowY: 'scroll',
      padding: `16px`,
    },
    // AccodionAreaのgif画の高さ
    gif: {
      height: `60vh`,
    },
    // login formのスタイル
    auth: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    auth_form: {
      width: `100%`,
      marginTop: theme.spacing(4),
    },
    // Boardsのボタンラベルに適用
    label: {
      justifyContent: `left`,
    },
    // スピナーに適用
    Spinner: {
      zIndex: 99,
    },
  }));

  return (
    <StylesContext.Provider value={{useStyles}}>
      {props.children}
    </StylesContext.Provider>
  )
}