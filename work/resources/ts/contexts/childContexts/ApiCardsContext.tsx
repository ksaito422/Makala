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
      setStatus({
        open: true,
        type: 'error',
        message: 'データの取得に失敗しました。'
      });
      return;
    })
    .finally(() => {
      setProgress(false);
      return;
    })
  }

  // apiと通信して、カードを取得するロジック
  const deleteCard: any = async (id: number) => {
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await axios({
      method: 'DELETE',
      url: `/api/v1/cards/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(async (res) => {
      await getCards(1);
      await setStatus({
        open: true,
        type: 'success',
        message: 'カードを削除しました。'
      });
      return;
    })
    .catch(async (err) => {
      await getCards(1);
      await setStatus({
        open: true,
        type: 'error',
        message: 'カードの削除に失敗しました。'
      });
      return;
    })
    .finally(() => {
      setProgress(false);
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