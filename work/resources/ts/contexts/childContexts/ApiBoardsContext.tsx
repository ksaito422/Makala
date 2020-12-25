import React, { useState, createContext, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import { AuthContext } from './AuthContext';
import { instance } from '../../config/axios.config';

export const ApiBoardsContext = createContext({});

export const ApiBoardsContextProvider: React.FC = (props) => {
  /**
   * { api通信中のスピナー表示のon/off管理, api通信の結果通知 }
   * ログインユーザーの情報
   * getBoardsで取得したデータを保管
   */
  const { setProgress, setStatus } = useContext<any>(FeedbackContext);
  const { authUserState } = useContext<any>(AuthContext);
  const [boardsState, setBoardsState] = useState([]);

  // ボードを取得するapiと通信
  const getBoards = async () => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'GET',
      url: `api/v1/boards/${authUserState.name}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        // 無事データを取得できたら、boardsStateに保管
        setBoardsState(res.data.boards);
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

  // ボードを作成するapiと通信
  const createBoard = async (data: { user_id: number; board_name: string }) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'POST',
      url: `api/v1/boards`,
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
          message: 'ボードの作成に失敗しました。',
        });
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
        getBoards();
      });
  };

  // ボード名を更新するapiと通信
  const updateBoard = async (data: { id: number; board_name: string }) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'PUT',
      url: `api/v1/boards/${data.id}`,
      data: data.board_name,
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
          message: 'ボード名の変更に失敗しました。',
        });
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
        getBoards();
      });
  };

  // パフォーマンス向上させるときに使う
  // ボードの更新時に、更新部分だけを再度stateにセットし直している
  const updateBoardState = (obj: { index: number; board_name: string }) => {
    const newBoardsState: any = [...boardsState];
    newBoardsState[obj.index].board_name = obj.board_name;
    setBoardsState(newBoardsState);
  };

  // ボードを削除するapiと通信
  const deleteBoard = async (id: number) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'DELETE',
      url: `api/v1/boards/${id}`,
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
      .catch(async () => {
        await getBoards();
        await setStatus({
          open: true,
          type: 'error',
          message: 'ボードの削除に失敗しました。',
        });
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
      });
  };

  // ボードの削除時にstateから削除して、再度stateにセットし直している
  const deleteBoardState = (index: number) => {
    const newBoardsState = [...boardsState];
    newBoardsState.splice(index, 1);
    setBoardsState(newBoardsState);
  };

  return (
    <ApiBoardsContext.Provider
      value={{
        boardsState,
        setBoardsState,
        getBoards,
        createBoard,
        updateBoard,
        updateBoardState,
        deleteBoard,
        deleteBoardState,
      }}
    >
      {props.children}
    </ApiBoardsContext.Provider>
  );
};
