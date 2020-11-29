import React, { useState, createContext } from 'react';
import axios from 'axios';

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

  // ログイン状態の管理
  const [isAuth, setIsAuth] = useState(false);

  // 認証成功したらisAuthをtrueにする
  const login = () => {
    setIsAuth(true);
  }

  // apiと通信して、ログイン処理を行う
  const authLogin = async () => {
    await axios({
      method: 'POST',
      url: 'api/auth/login',
      data: authState,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      login();
      localStorage.setItem('makala', res.data.access_token);
    })
    .catch((err) => {
      // あとでフロントに失敗を通知のロジックを書く
      console.log('ログインに失敗しました。');
    })
  }

  // apiと通信して、ユーザー情報を取得
  const authMe = async () => {
    const token = localStorage.getItem('makala');
    await axios({
      method: 'POST',
      url: 'api/auth/me',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      login();
    })
    .catch((err) => {
    })
  }

  return (
    <AuthContext.Provider value={{
      authState,
      setAuthState,
      isAuth,
      login,
      authLogin,
      authMe,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}