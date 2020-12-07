import React, { useState, createContext, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import axios from 'axios';

type AuthUserState = {
    id: number | null,
    name: string | null,
}

export const AuthContext = createContext({});

export const AuthContextProvider: React.FC = (props) => {
  // スピナー表示するため
  // 認証情報を保持するstate
  const { setProgress, setStatus } = useContext<any>(FeedbackContext);
  const [authUserState, setAuthUserState] = useState<AuthUserState>({
    id: null,
    name: null,
  });

  // ログイン状態の管理
  // 認証成功したらisAuthをtrueにする
  // ログアウトしたらisAuthをfalseにする
  const [isAuth, setIsAuth] = useState(false);
  const login = () => {
    setIsAuth(true);
  }
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
      // set isAuth to true
      // 通信結果の通知内容
      localStorage.setItem('makala_token', res.data.access_token);
      localStorage.setItem('makala_user', res.data.name);
      setAuthUserState({ ...authUserState, id: res.data.id, name: res.data.name});
      login();
      setStatus({
        open: true,
        type: 'success',
        message: 'ログインしました。'
      });
      return;
    })
    .catch(() => {
      // 通信結果の通知内容
      setStatus({
        open: true,
        type: 'error',
        message: 'ログインに失敗しました。'
      });
      return;
    })
    .finally(() => {
      // スピナーoff
      setProgress(false);
      return;
    });
  }

  // apiと通信して、ユーザー登録を行う
  const authRegister = async (
    data: {
      'name': string,
      'email': string,
      'password': string,
  }) => {
    // スピナーon
    await setProgress(true);

    await axios({
      method: 'POST',
      url: 'api/auth/register',
      data: data,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      // ローカルストレージに認証情報を保管 *脆弱性のことはあとで考える
      // set isAuth to true
      // 通信結果の通知内容
      localStorage.setItem('makala_token', res.data.access_token);
      localStorage.setItem('makala_user', res.data.name);
      setAuthUserState({ ...authUserState, id: res.data.id, name: res.data.name});
      login();
      setStatus({
        open: true,
        type: 'success',
        message: '新規ユーザー登録しました。'
      });
      return;
    })
    .catch(() => {
      // 通信結果の通知内容
      setStatus({
        open: true,
        type: 'error',
        message: '新規ユーザー登録に失敗しました。'
      });
      return;
    })
    .finally(() => {
      // スピナーoff
      setProgress(false);
      return;
    });
  }

  // apiと通信して、ログアウト処理を行う
  const authLogout = async () => {
    // スピナーon
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await axios({
      method: 'POST',
      baseURL: 'http://localhost:8080/',
      url: 'api/auth/logout',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      // ローカルストレージの認証情報を削除
      // set isAuth to false
      // 通信結果の通知内容
      localStorage.removeItem('makala_token');
      localStorage.removeItem('makala_user');
      logout();
      setStatus({
        open: true,
        type: 'success',
        message: 'ログアウトしました。'
      });
      return;
    })
    .catch((err) => {
      // 通信結果の通知内容
      setStatus({
        open: true,
        type: 'error',
        message: 'ログアウトに失敗しました。'
      });
      return;
    })
    .finally(() => {
      // スピナーoff
      setProgress(false);
      return;
    });
  }

  const authRefresh = async () => {
    const token = localStorage.getItem('makala_token');

    await axios({
      method: 'POST',
      baseURL: 'http://localhost:8080',
      url: 'api/auth/refresh',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      localStorage.setItem('makala_token', res.data.access_token);
      return;
    })
    .catch(() => {
      return;
    })
  }

  // apiと通信して、ユーザー情報を取得
  const authMe = async () => {
    // スピナーon
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
      setAuthUserState({ ...authUserState, id: res.data.id, name: res.data.name});
      login();
      authRefresh();
      return;
    })
    .catch(() => {
      return;
    })
    .finally(() => {
      // スピナーoff
      setProgress(false);
      return;
    })
  }

  return (
    <AuthContext.Provider value={{
      authUserState,
      setAuthUserState,
      isAuth,
      login,
      authLogin,
      authRegister,
      authLogout,
      authMe,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}