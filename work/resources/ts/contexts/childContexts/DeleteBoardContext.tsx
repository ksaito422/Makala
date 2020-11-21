import React, { createContext } from 'react';
import axios from 'axios';

export const DeleteBoardContext = createContext({});

export const DeleteBoardContextProvider: React.FC = props => {
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
    })
    .catch((err) => {
      return;
    })
  }

  return (
    <DeleteBoardContext.Provider value={{deleteBoard}}>
      {props.children}
    </DeleteBoardContext.Provider>
  )
}