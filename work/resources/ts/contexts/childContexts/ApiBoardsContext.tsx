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

  // apiと通信して、ボードを削除するロジック
  const deleteBoard: any = (id: number) => {
    axios({
      method: 'DELETE',
      url: `/api/v1/boards/${id}`,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      console.log(res.data.message);
      console.log(res.data);
    })
    .catch((err) => {
      return;
    })
  }

  return (
    <ApiBoardsContext.Provider value={{
      boardsState,
      setBoardsState,
      getBoards,
      deleteBoard,
      }}
    >
      {props.children}
    </ApiBoardsContext.Provider>
  )
}