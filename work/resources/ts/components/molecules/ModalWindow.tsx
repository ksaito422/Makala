import React, { useState, useContext } from 'react';
import { Modal, useMediaQuery } from '@material-ui/core';
import { StylesContext } from '../../contexts/childContexts/StylesContext';

type Props = {
  modalOpen: boolean;
  modalOnClose: () => void;
};

// モーダルの表示位置を決める
function getModalStyle() {
  // 0~100%の間で真ん中を指定
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const ModalWindow: React.FC<Props> = (props) => {
  /**
   * cssの定義
   * モーダルの位置を指定したstate
   * スマホ( > 600px)を基準にレスポンシブ対応
   */
  const { useStyles } = useContext<any>(StylesContext);
  const classes = useStyles();
  const [modalStyleState] = useState(getModalStyle);
  const matches = useMediaQuery('(min-width: 601px)');

  // モーダルに表示する内容の定義
  return (
    <Modal open={props.modalOpen} onClose={props.modalOnClose}>
      {matches ? (
        // タブレット以上の画面サイズ
        <div style={modalStyleState} className={classes.modal}>
          {props.children}
        </div>
      ) : (
        // スマホの画面サイズ
        <div style={modalStyleState} className={classes.modal_responsive}>
          {props.children}
        </div>
      )}
    </Modal>
  );
};
