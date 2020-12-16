import React, { useState, createContext, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import { instance } from '../../config/axios.config';

type AuthUserState = {
    id: number | null,
    name: string | null,
}

export const AuthContext = createContext({});

export const AuthContextProvider: React.FC = (props) => {
  /**
   * { api通信中のスピナー表示のon/off管理, api通信の結果通知 }
   * 認証情報を保持するstate
   */
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

  // ログイン処理を行うapiと通信
  const authLogin = async (
    data: {
      'email': string,
      'password': string,
  }) => {
    // スピナーon
    await setProgress(true);

    await instance({
      method: 'POST',
      url: 'api/auth/login',
      data: data,
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

  // ユーザー登録を行うapiと通信
  const authRegister = async (
    data: {
      'name': string,
      'email': string,
      'password': string,
  }) => {
    // スピナーon
    await setProgress(true);

    await instance({
      method: 'POST',
      url: 'api/auth/register',
      data: data,
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
        message: 'ユーザー登録が完了しました。'
      });
      return;
    })
    .catch(() => {
      // 通信結果の通知内容
      setStatus({
        open: true,
        type: 'error',
        message: 'ユーザー登録に失敗しました。'
      });
      return;
    })
    .finally(() => {
      // スピナーoff
      setProgress(false);
      return;
    });
  }

  // ログアウト処理を行うapiと通信
  const authLogout = async () => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'POST',
      url: 'api/auth/logout',
      headers: {
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
        message: res.data.message
      });
      return;
    })
    .catch(() => {
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

  // トークンリフレッシュするapiと通信
  const authRefresh = async () => {
    // トークン取得
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'POST',
      url: 'api/auth/refresh',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      // 再度取得した、トークンをセット
      localStorage.setItem('makala_token', res.data.access_token);
      return;
    })
    .catch(() => {
      return;
    })
  }

  // ユーザー情報を取得するapiと通信
  const authMe = async () => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'POST',
      url: 'api/auth/me',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      // ユーザー名とidをセット
      // isAuthをtrueにする
      // トークンリフレッシュする
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

  // ゲストログイン処理を行うapiと通信
  const authGuestLogin = async () => {
    // スピナーon
    // ゲストアカウントの認証情報
    await setProgress(true);
    const data = {
      'email': 'guest@example.com',
      'password': 'guest1234'
    }

    await instance({
      method: 'POST',
      url: 'api/auth/login',
      data: data,
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
        message: 'ゲストログインしました。'
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
      authGuestLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}