import React, { useState, createContext, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import axios from 'axios';

export const ApiCardsContext = createContext({});

export const ApiCardsContextProvider: React.FC = (props) => {
  // スピナー、api通信の結果を表示するため
  // { items: ボードアイテムで表示するデータ, numberMade: 今までにカードを作った総数 }
  const { setProgress, setStatus } = useContext<any>(FeedbackContext);
  const [cardsState, setCardsState] = useState([]);

  // apiと通信して、カードを取得するロジック
  const getCards = async (board_name: string) => {
    // スピナーon
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await axios({
      method: 'GET',
      url: `/api/v1/cards/${board_name}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      setCardsState(res.data.cards);
      return;
    })
    .catch(() => {
      setStatus({
        open: true,
        type: 'error',
        message: 'データの取得に失敗しました。'
      });
      return;
    })
    .finally(() => {
      // スピナーoff
      setProgress(false);
      return;
    })
  }

  // apiと通信して、カードを新規作成するロジック
  const createCard = async (
    card: any,
    data: {
      board_name: string,
      card_name: string,
      card_content: string,
    }) => {
      await setProgress(true);
      const token = localStorage.getItem('makala_token');

      await axios({
        method: 'POST',
        url: `/api/v1/cards`,
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => {
        setStatus({
          open: true,
          type: 'success',
          message: res.data.message
        });
        return;
      })
      .catch(() => {
        setStatus({
          open: true,
          type: 'error',
          message: 'カードの作成に失敗しました。'
        });
        return;
      })
      .finally(() => {
        setProgress(false);
        getCards(card);
        return;
      })
    }

  // apiと通信して、カードを更新するロジック
  const updateCard = async (
    id: number,
    card: any,
    data: {
      card_name: string,
      card_content: string,
    }) => {
      // スピナーon
      await setProgress(true);
      const token = localStorage.getItem('makala_token');

      await axios({
        method: 'PUT',
        url: `/api/v1/cards/${id}`,
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(() => {
        setStatus({
          open: true,
          type: 'success',
          message: 'カードの内容を変更しました。'
        });
        return;
      })
      .catch(async () => {
        await setStatus({
          open: true,
          type: 'error',
          message: 'カードの変更に失敗しました。'
        });
        return;
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
        getCards(card);
        return;
      })
    }

  // apiと通信して、カードを削除するロジック
  const deleteCard = async (id: number, card: any) => {
    // スピナーon
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
    .then(async () => {
      await setStatus({
        open: true,
        type: 'success',
        message: 'カードを削除しました。'
      });
      return;
    })
    .catch(async () => {
      await setStatus({
        open: true,
        type: 'error',
        message: 'カードの削除に失敗しました。'
      });
      return;
    })
    .finally(() => {
      // スピナーoff
      setProgress(false);
      getCards(card);
      return;
    })
  }

  return (
    <ApiCardsContext.Provider value={{
      cardsState,
      setCardsState,
      getCards,
      createCard,
      updateCard,
      deleteCard
      }}
    >
      {props.children}
    </ApiCardsContext.Provider>
  );
}