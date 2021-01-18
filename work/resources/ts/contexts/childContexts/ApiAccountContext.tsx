import React, { createContext, useContext } from 'react';
import { FeedbackContext } from './FeedbackContext';
import { AuthContext } from './AuthContext';
import { instance } from '../../config/axios.config';

export const ApiAccountContext = createContext({});

export const ApiAccountContextProvider: React.FC = (props) => {
  /**
   * { api通信中のスピナー表示のon/off管理, api通信の結果通知 }
   * ログインユーザーの情報
   * getBoardsで取得したデータを保管
   */
  const { setProgress, setStatus } = useContext<any>(FeedbackContext);
  const { authUserState, setAuthUserState, logout } = useContext<any>(AuthContext);

  // ユーザー名を更新するapiと通信
  const changeName = async (name: string, userId: number) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');

    await instance({
      method: 'PUT',
      url: `api/v1/account/name/${userId}`,
      data: { name },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        // ローカルストレージのユーザー名を置換する
        // ユーザー情報を管理するstateのnameを更新する
        localStorage.setItem('makala_user', name);
        setAuthUserState({
          ...authUserState,
          name,
        });
        setStatus({
          open: true,
          type: 'success',
          message: res.data.message,
        });
      })
      .catch((err) => {
        setStatus({
          open: true,
          type: 'error',
          message: 'ユーザー名の変更に失敗しました。',
        });
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
      });
  };

  // メールアドレスを変更するapiと通信
  const changeEmail = async (newEmail: string, email: string, password: string, userId: number) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');
    const data = { newEmail, email, password, userId };

    await instance({
      method: 'PUT',
      url: `api/v1/account/email/${userId}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        // ユーザー情報を管理するstateのnameを更新する
        setAuthUserState({ ...authUserState, email: newEmail });
        setStatus({
          open: true,
          type: 'success',
          message: res.data.message,
        });
      })
      .catch((err) => {
        setStatus({
          open: true,
          type: 'error',
          message: err.response.data.message,
        });
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
      });
  };

  // パスワードを変更するapiと通信
  const changePassword = async (
    password: string,
    newPassword: string,
    email: string,
    userId: number
  ) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');
    const data = { password, newPassword, email, userId };

    await instance({
      method: 'PUT',
      url: `api/v1/account/password/${userId}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setStatus({
          open: true,
          type: 'success',
          message: res.data.message,
        });
      })
      .catch((err) => {
        setStatus({
          open: true,
          type: 'error',
          message: err.response.data.message,
        });
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
      });
  };

  // アカウントを削除するapiと通信
  const accountRelease = async (email: string, password: string, userId: number) => {
    // スピナーon
    // トークン取得
    await setProgress(true);
    const token = localStorage.getItem('makala_token');
    const data = { email, password, userId };

    await instance({
      method: 'DELETE',
      url: `api/v1/account/release/${userId}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setStatus({
          open: true,
          type: 'success',
          message: res.data.message,
        });
        // ログアウト状態をfalseに変更
        // ストレージからデータを削除する
        logout();
        localStorage.removeItem('makala_user');
        localStorage.removeItem('makala_token');
      })
      .catch((err) => {
        setStatus({
          open: true,
          type: 'error',
          message: err.response.data.message,
        });
      })
      .finally(() => {
        // スピナーoff
        setProgress(false);
      });
  };

  return (
    <ApiAccountContext.Provider value={{ changeName, changeEmail, changePassword, accountRelease }}>
      {props.children}
    </ApiAccountContext.Provider>
  );
};
