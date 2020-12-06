import React, { createContext } from 'react';
import { StylesContextProvider } from './childContexts/StylesContext';
import { FeedbackContextProvider } from './childContexts/FeedbackContext';
import { AuthContextProvider } from './childContexts/AuthContext';
import { ApiBoardsContextProvider } from './childContexts/ApiBoardsContext';
import { ApiCardsContextProvider } from './childContexts/ApiCardsContext';
import { ModalPropsContextProvider } from './childContexts/ModalPropsContext';
import { BoardItemContextProvider } from './childContexts/BoardItemContext';

export const TotalContext = createContext({});

export const TotalContextProvider: React.FC = props => {
  return (
    <StylesContextProvider>
      <FeedbackContextProvider>
        <AuthContextProvider>
          <ApiBoardsContextProvider>
            <ApiCardsContextProvider>
              <ModalPropsContextProvider>
                <BoardItemContextProvider>
                  {props.children}
                </BoardItemContextProvider>
              </ModalPropsContextProvider>
            </ApiCardsContextProvider>
          </ApiBoardsContextProvider>
        </AuthContextProvider>
      </FeedbackContextProvider>
    </StylesContextProvider>
  );
}
