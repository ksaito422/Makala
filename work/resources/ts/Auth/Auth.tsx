import React, { useState, useContext, useEffect } from 'react';
import { Spinner } from '../components/molecules/Spinner';
import { AuthContext } from '../contexts/childContexts/AuthContext';

export const Auth: React.FC = (props) => {
  /**
   * ログインチェックのメソッドをインポートする
   * ログインチェック中のスピナー表示有無の状態管理
   */
  const { authMe } = useContext<any>(AuthContext);
  const [check, setCheck] = useState<boolean>(true);

  useEffect(() => {
    const f = async () => {
      await authMe();
      setCheck(false);
    };
    f();
  }, []);

  return (
    // 認証確認中にローディングアイコンを表示
    <>{check ? <Spinner open /> : props.children}</>
  );
};
