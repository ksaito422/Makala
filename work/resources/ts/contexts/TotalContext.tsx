import React, { createContext } from 'react';
import { StylesContextProvider } from './childContexts/StylesContext';
import { GetBoardsContextProvider } from './childContexts/GetBoardsContext';
import { BoardItemContextProvider } from './childContexts/BoardItemContext';

export const TotalContext = createContext({});

export const TotalContextProvider: React.FC = props => {
  return (
    <StylesContextProvider>
      <GetBoardsContextProvider>
        <BoardItemContextProvider>
          {props.children}
        </BoardItemContextProvider>
      </GetBoardsContextProvider>
    </StylesContextProvider>
  )
}
