import React, { createContext } from 'react';
import { StylesContextProvider } from './childContexts/StylesContext';
import { AuthContextProvider } from './childContexts/AuthContext';
import { ApiBoardsContextProvider } from './childContexts/ApiBoardsContext';
import { StoreBoardContextProvider } from './childContexts/StoreBoardContext';
import { UpdateBoardContextProvider } from './childContexts/UpdateBoardContext';
import { ShowCardsContextProvider } from './childContexts/ShowCardsContext';
import { BoardItemContextProvider } from './childContexts/BoardItemContext';

export const TotalContext = createContext({});

export const TotalContextProvider: React.FC = props => {
  return (
    <StylesContextProvider>
      <AuthContextProvider>
        <ApiBoardsContextProvider>
          <StoreBoardContextProvider>
            <UpdateBoardContextProvider>
              <ShowCardsContextProvider>
                <BoardItemContextProvider>
                  {props.children}
                </BoardItemContextProvider>
              </ShowCardsContextProvider>
            </UpdateBoardContextProvider>
          </StoreBoardContextProvider>
        </ApiBoardsContextProvider>
      </AuthContextProvider>
    </StylesContextProvider>
  );
}
