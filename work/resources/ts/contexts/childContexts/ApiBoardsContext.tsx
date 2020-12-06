import React, { useState, createContext, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import { AuthContext } from './AuthContext';
import axios from 'axios';

export const ApiBoardsContext = createContext({});

export const ApiBoardsContextProvider: React.FC = props => {
  // スピナー表示するため
  // ログインユーザーの情報
  // getBoardsで取得したデータを保管
  const { setProgress, setStatus } = useContext<any>(FeedbackContext);
  const { authUserState } = useContext<any>(AuthContext);
  const [boardsState, setBoardsState] = useState([]);

  // apiと通信して、ボードを取得するロジック
  const getBoards = async () => {
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await axios({
      method: 'GET',
      url: `/api/v1/boards/${authUserState.name}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      setBoardsState(res.data.boards);
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

  // apiと通信して、ボードを作成するロジック
  const createBoard = async (
    data: {
      user_id: number,
      board_name: string,
    }) => {
      await setProgress(true);
      const token = localStorage.getItem('makala_token');

      await axios({
        method: 'POST',
        url: `/api/v1/boards`,
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
          message: 'ボードを作成しました。'
        });
        return;
      })
      .catch((err) => {
        setStatus({
          open: true,
          type: 'error',
          message: 'ボードの作成に失敗しました。'
        });
        return;
      })
      .finally(() => {
        setProgress(false);
        getBoards();
        return;
      })
    }

  // apiと通信して、ボード名を更新するロジック
  const updateBoard = async (
    data: {
      id: number,
      board_name: string,
    }) => {
      await setProgress(true);
      const token = localStorage.getItem('makala_token');

      await axios({
        method: 'PUT',
        url: `/api/v1/boards/${data.id}`,
        data: data.board_name,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => {
        setStatus({
          open: true,
          type: 'success',
          message: 'ボード名を変更しました。'
        });
        return;
      })
      .catch(async (err) => {
        await getBoards();
        await setStatus({
          open: true,
          type: 'error',
          message: 'ボード名の変更に失敗しました。'
        });
        return;
      })
      .finally(() => {
        setProgress(false);
        getBoards();
        return;
      })
    }

  // ボードの更新時に、更新部分だけを再度stateにセットし直している
  const updateBoardState = (
    obj: {
      index: number,
      board_name: string
    }) => {
    const newBoardsState: any = [ ...boardsState ];
    newBoardsState[obj.index].board_name = obj.board_name;
    setBoardsState(newBoardsState);
  }

  // apiと通信して、ボードを削除するロジック
  const deleteBoard = async (id: number) => {
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await axios({
      method: 'DELETE',
      url: `/api/v1/boards/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      setStatus({
        open: true,
        type: 'success',
        message: 'ボードを削除しました。'
      });
      return;
    })
    .catch(async (err) => {
      await getBoards();
      await setStatus({
        open: true,
        type: 'error',
        message: 'ボードの削除に失敗しました。'
      });
      return;
    })
    .finally(() => {
      setProgress(false);
      return;
    })
  }

  // ボードの削除時にstateから削除して、再度stateにセットし直している
  const deleteBoardState = (index: number) => {
    const newBoardsState = [ ...boardsState ];
    newBoardsState.splice(index, 1);
    setBoardsState(newBoardsState);
  }

  return (
    <ApiBoardsContext.Provider value={{
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
  )
}