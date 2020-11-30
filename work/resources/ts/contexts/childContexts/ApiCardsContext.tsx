import React, { useState, createContext } from 'react';
import axios from 'axios';

export const ApiCardsContext = createContext({});

export const ApiCardsContextProvider: React.FC = props => {
  // { items: ボードアイテムで表示するデータ, numberMade: 今までにカードを作った総数 }
  const [cardsState, setCardsState] = useState<any>([]);

  // apiと通信して、カードを取得するロジック
  const getCards = async (id: number) => {
    const token = localStorage.getItem('makala_token');

    axios({
      method: 'GET',
      url: `/api/v1/cards/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      setCardsState(res.data.cards);
    })
    .catch((err) => {
      return;
    })
  }

  // apiと通信して、カードを取得するロジック
  const deleteCard: any = (id: number) => {
    axios({
      method: 'DELETE',
      url: `/api/v1/cards/${id}`,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      // ログイン認証作ったら、修正する
      console.log('削除');
    })
    .catch((err) => {
      return;
    })
  }

  return (
    <ApiCardsContext.Provider value={{
      cardsState,
      setCardsState,
      getCards,
      deleteCard
      }}
    >
      {props.children}
    </ApiCardsContext.Provider>
  );
}