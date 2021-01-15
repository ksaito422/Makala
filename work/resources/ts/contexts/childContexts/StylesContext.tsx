import React, { createContext } from 'react';
import { makeStyles } from '@material-ui/core';

export const StylesContext = createContext({});

// ページ全体で使うclassNameの定義
export const StylesContextProvider: React.FC = (props) => {
  const useStyles: any = makeStyles((theme) => ({
    // pagesで使用 メインコンテンツとヘッダーの間隔をとるため
    main_container: {
      marginTop: theme.spacing(4),
    },
    // dragBoradの高さとスクロール可否
    drop_able: {
      maxHeight: `70vh`,
      overflowY: 'scroll',
    },
    // Draggable内の要素の間隔をとるため
    drag_card: {
      marginBottom: theme.spacing(2),
    },
    // modalの表示サイズ
    modal: {
      position: 'absolute',
      width: `80%`,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    // スマホサイズのmodal表示サイズ
    modal_responsive: {
      position: 'absolute',
      width: `95%`,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    // アイコンを中央に
    centerPlacement: {
      textAlign: 'center',
    },
    // アイコンを右に
    rightPlacement: {
      textAlign: 'right',
    },
    // MarkdownPreview Paperのスタイル
    preview: {
      height: `70vh`,
      maxHeight: `70vh`,
      overflowY: 'scroll',
      padding: theme.spacing(2),
    },
    // AccodionAreaのgif画の高さ
    gif: {
      height: `60vh`,
    },
    auth_form: {
      width: `100%`,
      marginTop: theme.spacing(4),
    },
    form_board: {
      width: `100%`,
    },
    // Boardsのボタンラベルに適用
    label: {
      justifyContent: `left`,
    },
    // スピナーに適用
    Spinner: {
      zIndex: 99,
    },
    // アバターの色
    avatar: {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.light,
    },
    // スマホ画面対応のアバターサイズ
    avatar_small: {
      width: `26px`,
      height: `26px`,
    },
    // aタグの装飾
    Link: {
      textDecoration: `none`,
      color: theme.palette.primary.main,
    },
    // cardのスタイル
    card: {
      justifyContent: 'left',
    },
    setting_contents: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
    },
    account_button: {
      marginTop: theme.spacing(1),
      textAlign: 'right',
    },
    guset_container: {
      borderTop: 'solid 1px #dcdcdc',
    },
    guest_title: {
      marginBottom: theme.spacing(4),
    },
    guest_explanation: {
      marginBottom: theme.spacing(1),
    },
    guest_login: {
      marginTop: theme.spacing(4),
      textAlign: 'center',
    },
    auth_container: {
      padding: theme.spacing(4),
    },
    footer: {
      backgroundColor: theme.palette.secondary.dark,
      color: '#f0f0f0',
      padding: theme.spacing(2),
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    footer_link: {
      color: '#f0f0f0',
      textDecoration: 'none',
    },
    footer_copylight: {
      marginTop: theme.spacing(2),
    },
  }));
  return <StylesContext.Provider value={{ useStyles }}>{props.children}</StylesContext.Provider>;
};
