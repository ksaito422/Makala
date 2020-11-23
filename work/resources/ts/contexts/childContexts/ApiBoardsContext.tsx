import React, { useState, createContext } from 'react';
import axios from 'axios';

export const ApiBoardsContext = createContext({});

export const ApiBoardsContextProvider: React.FC = props => {
  const [boardsState, setBoardsState] = useState([]);

  // apiと通信して、ボードを取得するロジック
  const getBoards: any = () => {
    axios({
      method: 'GET',
      // とりあえずuser id を1でセットしてる
      url: '/api/v1/boards/1',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      setBoardsState(res.data.boards);
    })
    .catch((err) => {
      return
    })
  }

  // apiと通信して、ボード名を更新するロジック
  const updateBoard = (id: number, data: string) => {
    axios({
      method: 'PUT',
      url: `/api/v1/boards/${id}`,
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      return;
    })
    .catch((err) => {
      // あとでやる エラー時はメッセージを表示して、ボード再取得
      getBoards();
    })
  }

  // apiと通信して、ボードを削除するロジック
  const deleteBoard = (id: number) => {
    axios({
      method: 'DELETE',
      url: `/api/v1/boards/${id}`,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      return;
    })
    .catch((err) => {
      // あとでやる エラー時はメッセージを表示して、ボード再取得
      getBoards();
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
      updateBoard,
      deleteBoard,
      deleteBoardState,
      }}
    >
      {props.children}
    </ApiBoardsContext.Provider>
  )
}