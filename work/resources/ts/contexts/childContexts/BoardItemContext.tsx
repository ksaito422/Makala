import React, { useState, createContext } from 'react';

export const BoardItemContext = createContext({});

type ItemType = {
  id: string;
  content: string;
}

// BoardItemに渡すデータ
export const BoardItemContextProvider: React.FC = props => {
  const initial: ItemType[] = Array.from({ length: 5 }, (v, k) => k).map(k => {
    return {
      id: `${k}`,
      title: `id-${k}`,
      content: `Item ${k}`
    }
  })

  const [BoardItemState, setBoardItemState] = useState({ items: initial });

  return (
    <BoardItemContext.Provider value={{BoardItemState, setBoardItemState}}>
      {props.children}
    </BoardItemContext.Provider>
  )
}