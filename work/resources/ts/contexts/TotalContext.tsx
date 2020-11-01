import React, { createContext } from 'react';
import { StylesContextProvider } from './childContexts/StylesContext';
import { BoardItemContextProvider } from './childContexts/BoardItemContext';

export const TotalContext = createContext({});

export const TotalContextProvider: React.FC = props => {
  return (
    <StylesContextProvider>
      <BoardItemContextProvider>
        {props.children}
      </BoardItemContextProvider>
    </StylesContextProvider>
  )
}
