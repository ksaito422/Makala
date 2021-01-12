import React, { createContext } from 'react';
import { StylesContextProvider } from './childContexts/StylesContext';
import { FeedbackContextProvider } from './childContexts/FeedbackContext';
import { AuthContextProvider } from './childContexts/AuthContext';
import { ApiBoardsContextProvider } from './childContexts/ApiBoardsContext';
import { ApiCardsContextProvider } from './childContexts/ApiCardsContext';
import { ApiAccountContextProvider } from './childContexts/ApiAccountContext';
import { ModalPropsContextProvider } from './childContexts/ModalPropsContext';

export const TotalContext = createContext({});

export const TotalContextProvider: React.FC = (props) => {
  return (
    <StylesContextProvider>
      <FeedbackContextProvider>
        <AuthContextProvider>
          <ApiBoardsContextProvider>
            <ApiCardsContextProvider>
              <ApiAccountContextProvider>
                <ModalPropsContextProvider>{props.children}</ModalPropsContextProvider>
              </ApiAccountContextProvider>
            </ApiCardsContextProvider>
          </ApiBoardsContextProvider>
        </AuthContextProvider>
      </FeedbackContextProvider>
    </StylesContextProvider>
  );
};
