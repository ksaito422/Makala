import React, { createContext } from 'react';
import { StylesContextProvider } from './childContexts/StylesContext';
import { AuthContextProvider } from './childContexts/AuthContext';
import { ApiBoardsContextProvider } from './childContexts/ApiBoardsContext';
import { StoreBoardContextProvider } from './childContexts/StoreBoardContext';
import { ApiCardsContextProvider } from './childContexts/ApiCardsContext';
import { BoardItemContextProvider } from './childContexts/BoardItemContext';

export const TotalContext = createContext({});

export const TotalContextProvider: React.FC = props => {
  return (
    <StylesContextProvider>
      <AuthContextProvider>
        <ApiBoardsContextProvider>
          <StoreBoardContextProvider>
            <ApiCardsContextProvider>
              <BoardItemContextProvider>
                {props.children}
              </BoardItemContextProvider>
            </ApiCardsContextProvider>
          </StoreBoardContextProvider>
        </ApiBoardsContextProvider>
      </AuthContextProvider>
    </StylesContextProvider>
  );
}
