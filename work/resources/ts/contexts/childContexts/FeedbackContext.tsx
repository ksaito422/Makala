import React, { useState, createContext } from 'react';

export const FeedbackContext = createContext({});

export const FeedbackContextProvider: React.FC = props => {
  // スピナー表示の状態管理
  const [progress, setProgress] = useState(false);

  // スナックバーを使ってメッセージの管理もする

  return (
    <FeedbackContext.Provider value={{
      progress,
      setProgress
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
}