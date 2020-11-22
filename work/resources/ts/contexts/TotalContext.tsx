import React, { createContext } from 'react';
import { StylesContextProvider } from './childContexts/StylesContext';
import { AuthContextProvider } from './childContexts/AuthContext';
import { GetBoardsContextProvider } from './childContexts/GetBoardsContext';
import { StoreBoardContextProvider } from './childContexts/StoreBoardContext';
import { UpdateBoardContextProvider } from './childContexts/UpdateBoardContext';
import { DeleteBoardContextProvider } from './childContexts/DeleteBoardContext';
import { ShowCardsContextProvider } from './childContexts/ShowCardsContext';
import { BoardItemContextProvider } from './childContexts/BoardItemContext';

export const TotalContext = createContext({});

export const TotalContextProvider: React.FC = props => {
  return (
    <StylesContextProvider>
      <AuthContextProvider>
        <GetBoardsContextProvider>
          <StoreBoardContextProvider>
            <UpdateBoardContextProvider>
              <DeleteBoardContextProvider>
                <ShowCardsContextProvider>
                  <BoardItemContextProvider>
                    {props.children}
                  </BoardItemContextProvider>
                </ShowCardsContextProvider>
              </DeleteBoardContextProvider>
            </UpdateBoardContextProvider>
          </StoreBoardContextProvider>
        </GetBoardsContextProvider>
      </AuthContextProvider>
    </StylesContextProvider>
  );
}
