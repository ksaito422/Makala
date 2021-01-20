import React, { useState, createContext, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import { instance } from '../../config/axios.config';

export const ApiCardsContext = createContext({});

export const ApiCardsContextProvider: React.FC = (props) => {
  /**
   * { api通信中のスピナー表示のon/off管理, api通信の結果通知 }
   * { items: ボードアイテムで表示するデータ, numberMade: 今までにカードを作った総数 }
   */
  const { setProgress, setStatus } = useContext<any>(FeedbackContext);
  const [cardsState, setCardsState] = useState([]);

  // カードを取得するapiと通信
  const getCards = async (id: number) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'GET',
      url: `api/v1/cards/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        // 無事データを取得できたら、cardsStateに保管
        setCardsState(res.data.cards);
      })
      .catch(() => {
        setStatus({
          open: true,
          type: 'error',
          message: 'データの取得に失敗しました。',
        });
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
      });
  };

  // カードを新規作成するapiと通信
  const createCard = async (
    card: any,
    data: {
      boardId: number;
      cardContent: string;
    }
  ) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'POST',
      url: `api/v1/cards`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setStatus({
          open: true,
          type: 'success',
          message: res.data.message,
        });
      })
      .catch(() => {
        setStatus({
          open: true,
          type: 'error',
          message: 'カードの作成に失敗しました。',
        });
      })
      .finally(() => {
        setProgress(false);
        getCards(card);
      });
  };

  // カードを更新するロジックapiと通信
  const updateCard = async (id: number, card: any, data: string) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'PUT',
      url: `api/v1/cards/${id}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setStatus({
          open: true,
          type: 'success',
          message: res.data.message,
        });
      })
      .catch(() => {
        setStatus({
          open: true,
          type: 'error',
          message: 'カードの内容変更に失敗しました。',
        });
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
        getCards(card);
      });
  };

  // カードを削除するapiと通信
  const deleteCard = async (id: number, card: any) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'DELETE',
      url: `api/v1/cards/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setStatus({
          open: true,
          type: 'success',
          message: res.data.message,
        });
      })
      .catch(() => {
        setStatus({
          open: true,
          type: 'error',
          message: 'カードの削除に失敗しました。',
        });
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
        getCards(card);
      });
  };

  return (
    <ApiCardsContext.Provider
      value={{
        cardsState,
        setCardsState,
        getCards,
        createCard,
        updateCard,
        deleteCard,
      }}
    >
      {props.children}
    </ApiCardsContext.Provider>
  );
};
