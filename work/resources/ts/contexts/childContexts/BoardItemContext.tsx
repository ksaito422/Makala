import React, { useState, createContext } from 'react';

export const BoardItemContext = createContext({});

type ItemType = {
  id: string,
  title: string,
  content: string,
}

// BoardItemに渡すデータ
export const BoardItemContextProvider: React.FC = props => {
  // 初期表示時のカード数
  const initial: ItemType[] = Array.from({ length: 0 }, (v, k) => k).map(k => {
    return {
      id: `${k}`,
      title: `id-${k}`,
      content: `Item ${k}`
    }
  });

  // { items: ボードアイテムで表示するデータ, numberMade: 今までにカードを作った総数 }
  const [BoardItemState, setBoardItemState] = useState({ items: initial, numberMade: initial.length });

  return (
    <BoardItemContext.Provider value={{BoardItemState, setBoardItemState}}>
      {props.children}
    </BoardItemContext.Provider>
  );
}