import React, { useState, createContext } from 'react';
import axios from 'axios';

export const ApiBoardsContext = createContext({});

export const ApiBoardsContextProvider: React.FC = props => {
  const [boardsState, setBoardsState] = useState([]);
  const token = localStorage.getItem('makala');

  // apiと通信して、ボードを取得するロジック
  const getBoards: any = (id: number) => {
    axios({
      method: 'GET',
      url: `/api/v1/boards/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
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
  const updateBoard = (
    obj: {
      id: number,
    }) => {
    axios({
      method: 'PUT',
      url: `/api/v1/boards/${obj.id}`,
      data: obj,
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
      updateBoardState,
      deleteBoard,
      deleteBoardState,
      }}
    >
      {props.children}
    </ApiBoardsContext.Provider>
  )
}