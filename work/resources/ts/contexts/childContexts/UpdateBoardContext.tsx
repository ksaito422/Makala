import React, { createContext } from 'react';
import axios from 'axios';

export const UpdateBoardContext = createContext({});

export const UpdateBoardContextProvider: React.FC = props => {
  // apiと通信して、ボード名を更新するロジック
  const updateBoard: any = (id: number, data: string) => {
    axios({
      method: 'PUT',
      url: `/api/v1/boards/${id}`,
      data: data,
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
    <UpdateBoardContext.Provider value={{updateBoard}}>
      {props.children}
    </UpdateBoardContext.Provider>
  );
}