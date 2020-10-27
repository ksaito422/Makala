import React, { createContext } from 'react';
import { StylesContextProvider } from './childContexts/StylesContext';

export const TotalContext = createContext({});

export const TotalContextProvider: React.FC = props => {
  return (
    <StylesContextProvider>
      {props.children}
    </StylesContextProvider>
  )
}
