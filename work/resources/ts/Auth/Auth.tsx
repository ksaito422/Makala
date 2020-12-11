import React, { useState, useContext, useEffect } from 'react';
import { Spinner } from '../components/molecules/Spinner';
import { AuthContext } from '../contexts/childContexts/AuthContext';

export const Auth: React.FC = (props) => {
  const { authMe } = useContext<any>(AuthContext);
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    const f = async() => {
      await authMe();
      setCheck(true);
    }
    f();
  }, []);

  return (
    // 認証確認中にローディングアイコンを表示
    <>
      {!check ? (
        <Spinner open={!check} />
      ) : (
        props.children
      )}
    </>
  );
}