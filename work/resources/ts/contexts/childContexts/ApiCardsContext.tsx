import React, { useState, createContext } from 'react';
import axios from 'axios';

export const ApiCardsContext = createContext({});

export const ApiCardsContextProvider: React.FC = props => {
  // { items: ボードアイテムで表示するデータ, numberMade: 今までにカードを作った総数 }
  const [cardsState, setCardsState] = useState<any>([]);

  // apiと通信して、カードを取得するロジック
  const getCards: any = (id: number) => {
    axios({
      method: 'GET',
      url: `/api/v1/cards/${id}`,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      setCardsState(res.data.cards);
    })
    .catch((err) => {
      return;
    })
  }

  return (
    <ApiCardsContext.Provider value={{
      cardsState,
      setCardsState,
      getCards
      }}
    >
      {props.children}
    </ApiCardsContext.Provider>
  );
}