import React, { useState, createContext, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
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
  // スピナー表示するため
  const { setProgress } = useContext<any>(FeedbackContext);

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
  // ログアウトしたらisAuthをfalseにする
  const logout = () => {
    setIsAuth(false);
  }

  // apiと通信して、ログイン処理を行う
  const authLogin = async (
    data: {
      'email': string,
      'password': string,
  }) => {
    // スピナーon
    await setProgress(true);

    await axios({
      method: 'POST',
      url: 'api/auth/login',
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      // ローカルストレージに認証情報を保管 *脆弱性のことはあとで考える
      localStorage.setItem('makala_token', res.data.access_token);
      localStorage.setItem('makala_user', res.data.user);
      login();
    })
    .catch((err) => {
      // あとでフロントに失敗を通知のロジックを書く
      console.log('ログインに失敗しました。');
    })
    .finally(() => {
      // スピナーoff
      setProgress(false);
    })
  }

  // apiと通信して、ユーザー情報を取得
  const authMe = async () => {
    // api通信中はスピナー表示する
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await axios({
      method: 'POST',
      url: 'api/auth/me',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      localStorage.setItem('makala_user', res.data.name);
      login();
    })
    .catch((err) => {
    })
    .finally(() => {
      setProgress(false);
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