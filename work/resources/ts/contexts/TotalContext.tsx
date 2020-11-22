import React, { createContext } from 'react';
import { StylesContextProvider } from './childContexts/StylesContext';
import { GetBoardsContextProvider } from './childContexts/GetBoardsContext';
import { UpdateBoardContextProvider } from './childContexts/UpdateBoardContext';
import { DeleteBoardContextProvider } from './childContexts/DeleteBoardContext';
import { BoardItemContextProvider } from './childContexts/BoardItemContext';

export const TotalContext = createContext({});

export const TotalContextProvider: React.FC = props => {
  return (
    <StylesContextProvider>
      <GetBoardsContextProvider>
        <UpdateBoardContextProvider>
          <DeleteBoardContextProvider>
            <BoardItemContextProvider>
              {props.children}
            </BoardItemContextProvider>
          </DeleteBoardContextProvider>
        </UpdateBoardContextProvider>
      </GetBoardsContextProvider>
    </StylesContextProvider>
  );
}
