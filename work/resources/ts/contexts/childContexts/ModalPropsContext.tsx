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
  const [modalOpenState, setModalOpenState] = useState<boolean>(false);

  return (
    <ModalPropsContext.Provider
      value={{
        modalValueState,
        setModalValueState,
        modalOpenState,
        setModalOpenState,
      }}
    >
      {props.children}
    </ModalPropsContext.Provider>
  );
};
