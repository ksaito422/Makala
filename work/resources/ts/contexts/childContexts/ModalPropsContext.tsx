import React, { useState, createContext } from 'react';

export const ModalPropsContext = createContext({});

type ModalValueState = {
  id: number | null;
  board_name: string | null;
  card_name: string | null;
  card_content: string | null;
  index: number | null;
};

export const ModalPropsContextProvider: React.FC = (props) => {
  // モーダルに表示するデータ
  const [modalValueState, setModalValueState] = useState<ModalValueState>({
    id: null,
    board_name: null,
    card_name: null,
    card_content: null,
    index: null,
  });

  // モーダル表示のon/off切り替え
  // ユーザー名変更時のモーダルの表示状態管理
  // メールアドレス変更時のモーダルの表示状態管理
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);
  const [modalChangeName, setModalChangeName] = useState<boolean>(false);
  const [modalChangeEmail, setModalChangeEmail] = useState<boolean>(false);

  return (
    <ModalPropsContext.Provider
      value={{
        modalValueState,
        setModalValueState,
        modalOpenState,
        setModalOpenState,
        modalChangeName,
        setModalChangeName,
        modalChangeEmail,
        setModalChangeEmail,
      }}
    >
      {props.children}
    </ModalPropsContext.Provider>
  );
};
