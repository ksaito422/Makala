import React, { useState, createContext, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import axios from 'axios';

export const ApiCardsContext = createContext({});

export const ApiCardsContextProvider: React.FC = props => {
  // スピナー、api通信の結果を表示するため
  const { setProgress, setStatus } = useContext<any>(FeedbackContext);
  // { items: ボードアイテムで表示するデータ, numberMade: 今までにカードを作った総数 }
  const [cardsState, setCardsState] = useState<any>([]);

  // apiと通信して、カードを取得するロジック
  const getCards = async (id: number) => {
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await axios({
      method: 'GET',
      url: `/api/v1/cards/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      setCardsState(res.data.cards);
      return;
    })
    .catch((err) => {
      return;
    })
    .finally(() => {
      setProgress(false);
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