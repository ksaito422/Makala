import React, { useState, createContext } from 'react';

export const FeedbackContext = createContext({});

type Status = {
  open: boolean,
  type: 'success' | 'error' | null,
  message: string | null,
}

export const FeedbackContextProvider: React.FC = props => {
  // スピナー表示の状態管理
  const [progress, setProgress] = useState(false);

  // スナックバーを使ってメッセージの管理
  const [status, setStatus] = useState<Status>({
    open: false,
    type: null,
    message: null
  });

  return (
    <FeedbackContext.Provider value={{
      progress,
      setProgress,
      status,
      setStatus
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
}