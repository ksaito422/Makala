import React, { createContext } from 'react';
import axios from 'axios';

export const StoreBoardContext = createContext({});

export const StoreBoardContextProvider: React.FC = props => {
  // apiと通信して、新しいボードを保存するロジック
  const storeBoard: any = (data: string) => {
    axios({
      method: 'POST',
      url: `/api/v1/boards`,
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
    <StoreBoardContext.Provider value={{storeBoard}}>
      {props.children}
    </StoreBoardContext.Provider>
  );
}