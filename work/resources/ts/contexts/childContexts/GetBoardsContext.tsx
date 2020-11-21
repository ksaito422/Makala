import React, { useState, createContext } from 'react';
import axios from 'axios';

export const GetBoardsContext = createContext({});

export const GetBoardsContextProvider: React.FC = props => {
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

  return (
    <GetBoardsContext.Provider value={{boardsState, getBoards}}>
      {props.children}
    </GetBoardsContext.Provider>
  )
}