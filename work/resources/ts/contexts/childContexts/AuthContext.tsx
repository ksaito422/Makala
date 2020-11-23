import React, { useState, createContext } from 'react';
// import axios from 'axios';

type Props = {
    name: string | null,
    email: string | null,
    password: string | null,
    passConfirm: string | null,
    authError: string | null,
}

export const AuthContext = createContext({});

export const AuthContextProvider: React.FC = props => {
  // 認証情報を保持するstate
  const [authState, setAuthState] = useState<Props>({
    name: null,
    email: null,
    password: null,
    passConfirm: null,
    authError: null
  });

  return (
    <AuthContext.Provider value={{authState, setAuthState}}>
      {props.children}
    </AuthContext.Provider>
  );
}